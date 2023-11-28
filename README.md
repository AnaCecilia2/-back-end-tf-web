# -back-end-tf-web
## Back-End do trabalho final da disciplina de WEB

[Link modelo conceitual] (/src/db/modelo.png)

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

#### Para listar os usuários
- Descrição: Lista todos os usuários cadastrados no sistema
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario
- Tipo da requisição: GET 

#### Para listar um usuário específico
- Descrição: Lista todos os usuários cadastrados no sistema a partir de um id
- Endpoint: back-end-tf-web2-git-main-anacecilia2.vercel.app/usuario/id
- Tipo da requisição: GET 

#### Para inserir um novo usuário
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
- 

#### Para atualizar um usuário
- 

#### Para listar os usuários
- 

#### Para listar os usuários
- 

#### Para listar os usuários
- 

#### Para listar os usuários
- 


