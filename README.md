# -back-end-tf-web
## Back-End do trabalho final da disciplina de WEB

![](/src/db/modelo.png)

### O nosso site tem como objetivo principal a venda ou troca de livros.

#### Url do site: https://back-end-tf-web2-git-main-anacecilia2.vercel.app/

#### Logar no sistema
- Descrição: Faz login no sistema
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/login
- Tipo da requisição: POST
- Body: 
```
{
  "senha": "***",
  "email": "email-usuario@email.com"
}
```

#### Listar os usuários
- Descrição: Lista todos os usuários cadastrados no sistema
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario
- Tipo da requisição: GET 

#### Listar um usuário específico
- Descrição: Lista todos os usuários cadastrados no sistema a partir de um id
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario/id
- Tipo da requisição: GET 

#### Inserir um novo usuário
- Descrição: : Insere um novo usuário no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario
- Tipo da requisição: POST
- Body: 
```
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
  "contato": "9999999"
}
```

#### Para deletar um usuário
- Descrição: : Deleta um  usuário no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario/id
- Tipo da requisição: DELETE

#### Para atualizar um usuário
- Descrição: : atualiza os dados de um  usuário no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario/id
- Tipo da requisição: DELETE

#### Listar os anúncios
- Descrição: Lista todos os anúncios cadastrados no sistema
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/anuncio
- Tipo da requisição: GET 

#### Listar um anúncio específico
- Descrição: Lista todos os anúncios cadastrados no sistema a partir de um id
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/anuncio/id
- Tipo da requisição: GET 

#### Inserir um novo anúncio
- Descrição: : Insere um novo anúncio no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/anuncio
- Tipo da requisição: POST
- Body: 
```
{
  "nomelivro": "Nome do livro",
  "condicaouso": "estado de conservação que o livro se encontra",
  "preco": 999
  "descricao": "breve descrição sobre o livro"
}
```

#### Para deletar um anúncio
- Descrição: : Deleta um  anúncio no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/anuncio/id
- Tipo da requisição: DELETE

#### Listar os livros
- Descrição: Lista todos os livros cadastrados no sistema
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/livro
- Tipo da requisição: GET 

#### Listar um livro específico
- Descrição: Lista todos os livros cadastrados no sistema a partir de um id
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/livro/id
- Tipo da requisição: GET 

#### Inserir um novo livro
- Descrição: : Insere um novo livro no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/livro
- Tipo da requisição: POST
- Body: 
```
{
  "nomelivro": "Nome do livro",
  "condicaouso": "estado de conservação que o livro se encontra",
  "opc": "Livro que você gostaria de trocar por esse"
  "descricao": "breve descrição sobre o livro"
}
```

#### Para deletar um livro
- Descrição: : Deleta um  livro no banco de dados
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/livro/id
- Tipo da requisição: DELETE

