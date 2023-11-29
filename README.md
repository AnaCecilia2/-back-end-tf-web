# -back-end-tf-web
## Back-End do trabalho final da disciplina de WEB
#### Ana Cecília, Any, Maria Vitória, Pietra, Raica e Raissa; 3° info A

![](/src/db/modelo.png)

### O nosso site tem como objetivo principal a venda ou troca de livros.

#### Url do site: https://back-end-tf-web2.vercel.app 
##### obs: A entidade administrador está presente no modelo, porém as alunas ainda estão considerando se ele será utilizado ou não.

#### Logar no sistema
- Descrição: Faz login no sistema
- Endpoint: https://back-end-tf-web2.vercel.app/login
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
- Endpoint: https://back-end-tf-web2.vercel.app/usuario
- Tipo da requisição: GET 

#### Listar um usuário específico
- Descrição: Lista todos os usuários cadastrados no sistema a partir de um id
- Endpoint: https://back-end-tf-web2.vercel.app/usuario/id
- Tipo da requisição: GET 

#### Inserir um novo usuário
- Descrição: : Insere um novo usuário no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/usuario
- Tipo da requisição: POST
- Body: 
```
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com",
  "contato": "9999999"
}
```

#### Para deletar um usuário
- Descrição: : Deleta um  usuário no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/usuario/id
- Tipo da requisição: DELETE

#### Para atualizar um usuário
- Descrição: : atualiza os dados de um  usuário no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/usuario
- Tipo da requisição: PUT
- Body: 
```
 {
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com",
  "contato": "9999999",
  "idusuario": 1

  //obs: Insira o dado de acordo como você quer que ele fique atualizado, exceto o id
}
```

#### Listar os anúncios
- Descrição: Lista todos os anúncios cadastrados no sistema
- Endpoint: https://back-end-tf-web2.vercel.app/anuncio
- Tipo da requisição: GET 

#### Listar um anúncio específico
- Descrição: Lista todos os anúncios cadastrados no sistema a partir de um id
- Endpoint: https://back-end-tf-web2.vercel.app/anuncio/id
- Tipo da requisição: GET 

#### Inserir um novo anúncio
- Descrição: : Insere um novo anúncio no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/anuncio
- Tipo da requisição: POST
- Body: 
```
{
  "nomelivro": "Nome do livro",
  "condicaouso": "estado de conservação que o livro se encontra",
  "preco": 999,
  "descricao": "breve descrição sobre o livro"
}
```

#### Para deletar um anúncio
- Descrição: : Deleta um  anúncio no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/anuncio/id
- Tipo da requisição: DELETE

#### Para atualizar um anúncio
- Descrição: : atualiza os dados de um anúncio no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/anuncio
- Tipo da requisição: PUT
- Body: 
```
 {
  "nomelivro": "Nome do livro",
  "condicaouso": "estado de conservação que o livro se encontra",
  "preco": 88,
  "descricao": "breve descrição sobre o livro",
  "idanuncio": 1

  //obs: Insira o dado de acordo como você quer que ele fique atualizado, exceto o id
}
```

#### Listar os livros
- Descrição: Lista todos os livros cadastrados no sistema
- Endpoint: https://back-end-tf-web2.vercel.app/livro
- Tipo da requisição: GET 

#### Listar um livro específico
- Descrição: Lista todos os livros cadastrados no sistema a partir de um id
- Endpoint: https://back-end-tf-web2.vercel.app/livro/id
- Tipo da requisição: GET 

#### Inserir um novo livro
- Descrição: : Insere um novo livro no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/livro
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
- Endpoint: https://back-end-tf-web2.vercel.app/livro/id
- Tipo da requisição: DELETE

#### Para atualizar um livro
- Descrição: : atualiza os dados de um livro no banco de dados
- Endpoint: https://back-end-tf-web2.vercel.app/livro
- Tipo da requisição: PUT
- Body: 
```
 {
  "nomelivro": "Nome do livro",
  "condicaouso": "estado de conservação que o livro se encontra",
  "opc": "opção que você aceita em troca deste livro",
  "descricao": "breve descrição sobre o livro",
  "idlivro": 1

  //obs: Insira o dado de acordo como você quer que ele fique atualizado, exceto o id
}
```
