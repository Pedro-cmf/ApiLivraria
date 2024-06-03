const fs = require('fs');
const path = require('path');
const caminhoLivros = path.join(__dirname, '../dados/livros.json');

const lerLivrosDoArquivo = ()=>{
  const dados = fs.readFileSync(caminhoLivros, 'utf8');
  try {
    const json = JSON.parse(dados);
    const livros = json.books;
    // Verifique se 'livros' é um array
    if (!Array.isArray(livros)){
      throw new Error('Dados do arquivo JSON não são um array');
    }
    return livros;
  } catch (error){
    console.error('Erro ao ler o arquivo JSON:', error);
    return [];
  }
};
// Função auxiliar para escrever livros no arquivo JSON
const escreverLivrosNoArquivo = (livros) =>{
  const json = {books:livros};
  fs.writeFileSync(caminhoLivros,JSON.stringify(json, null, 2));
};
exports.listarLivros = (req, res) => {
  const livros = lerLivrosDoArquivo();
  res.json(livros);
};

exports.comprarLivro = (req, res) =>{
  const {titulo} = req.body;
  let livros = lerLivrosDoArquivo();

  const indiceLivro = livros.findIndex((livro) => livro.titulo ===titulo);
  if (indiceLivro !== -1) {
    livros.splice(indiceLivro, 1); // Removendo o livro
    escreverLivrosNoArquivo(livros);
    res.status(200).json({mensagem:'Livro comprado com sucesso'});
  } else {
    res.status(400).json({mensagem:'Livro não disponível'});
  }
};
exports.adicionarLivro=(req, res) =>{
  const {titulo, autor, genero, imagem} = req.body;
  let livros = lerLivrosDoArquivo();

  const livroExiste = livros.some((livro) => livro.titulo === titulo);
  if (!livroExiste) {
    livros.push({titulo, autor, genero, imagem });
    escreverLivrosNoArquivo(livros);
    res.status(201).json({mensagem: 'Livro adicionado com sucesso'});
  } else {
    res.status(400).json({mensagem:'Livro já existente'});
  }
};
