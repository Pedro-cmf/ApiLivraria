# Livraria

## Descrição
API para gerenciar o cadastro de livros de uma livraria.

## Endpoints

### Listar Livros
`GET /api/livros`

### Comprar um Livro
`POST /api/livros/comprar`
```json
{
  "titulo": "curtindo a vida adoidado"
}

###  Adicionar um Novo Livro
POST /api/livros/adicionar
{
  "titulo": "Título do Livro",
  "autor": "Autor do Livro",
  "genero": "Gênero do Livro",
  "imagem": "URL da imagem"
}
