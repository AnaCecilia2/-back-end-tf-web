import pkg from "pg";
const { Pool } = pkg;

async function connect() {
    const pool = new Pool({
      connectionString: process.env.URL_BD,
    });
    return pool.connect();
  }

  async function selectUsuarios() {
    const client = await connect();
    const res = await client.query("SELECT * FROM usuario");
    return res.rows;
  }

  async function selectUsuario(id) {
    const client = await connect();
    const query = "SELECT * FROM usuario WHERE idusuario = $1";
    const usuario = [id];
    const res = await client.query(query, usuario);
    return res.rows;
}

  async function insertUsuario(data) {
    const client = await connect();
    const query = "INSERT INTO usuario (nome,senha,email,contato) VALUES ($1,$2,$3,$4) ";
    const usuario = [data.nome, data.senha, data.email, data.contato];
    await client.query(query, usuario);
  }
  
  async function deleteUsuario(id) {
    const client = await connect();
    const query = "DELETE FROM usuario WHERE idusuario = $1";
    await client.query(query, [id]);
  }

  async function updateUsuario(data) {
    const client = await connect();
    const query =
      "UPDATE usuario SET nome = $1, email = $2, senha = $3, contato = $4 WHERE idusuario = $5";
    const usuario = [data.nome, data.email, data.senha, data.contato, data.idusuario];
    await client.query(query, usuario);
  }


  async function autenticarUsuario(email, senha) {
    const client = await connect();
    const query = "SELECT * FROM usuario WHERE email = $1 AND senha = $2";
    const usuario = [email, senha];
    const res = await client.query(query, usuario);
    return res.rows[0];
  }

  async function selectAnuncios() {
    const client = await connect();
    const res = await client.query("SELECT * FROM anuncio");
    return res.rows;
  }

  async function selectAnuncio(id) {
    const client = await connect();
    const query = "SELECT * FROM anuncio WHERE idanuncio = $1";
    const anuncio = [id];
    const res = await client.query(query, anuncio);
    return res.rows;
}

  async function insertAnuncio(data) {
    const client = await connect();
    const query = "INSERT INTO anuncio (nomelivro, condicaouso, preco, descricao) VALUES ($1,$2,$3,$4) ";
    const anuncio = [data.nomelivro, data.condicaouso, data.preco, data.descricao];
    await client.query(query, anuncio);
  }
  
  async function deleteAnuncio(id) {
    const client = await connect();
    const query = "DELETE FROM anuncio WHERE idanuncio = $1";
    await client.query(query, [id]);
  }

  async function updateAnuncio(data) {
    const client = await connect();
    const query =
      "UPDATE anuncio SET nomelivro = $1, condicaouso = $2, preco = $3, descricao = $4 WHERE idanuncio = $5";
    const anuncio = [data.nomelivro, data.condicaouso, data.preco, data.descricao, data.idanuncio];
    await client.query(query, anuncio);
  }  
  
  async function selectLivros() {
    const client = await connect();
    const res = await client.query("SELECT * FROM livro ");
    return res.rows;
  }

  async function selectLivro(id) {
    const client = await connect();
    const query = "SELECT * FROM livro  WHERE idlivro = $1";
    const livro = [id];
    const res = await client.query(query, livro);
    return res.rows;
}

  async function insertLivro(data) {
    const client = await connect();
    const query = "INSERT INTO livro  (nomelivro, condicaouso, opc, descricao) VALUES ($1,$2,$3,$4) ";
    const livro = [data.nomelivro, data.condicaouso, data.opc, data.descricao];
    await client.query(query, livro);
  }
  
  async function deleteLivro(id) {
    const client = await connect();
    const query = "DELETE FROM livro  WHERE idlivro = $1";
    await client.query(query, [id]);
  }

  async function updateLivro(data) {
    const client = await connect();
    const query =
    "UPDATE livro SET nomelivro = $1, condicaouso = $2, opc = $3, descricao = $4 WHERE idlivro = $5";
    const livro = [data.nomelivro, data.condicaouso, data.opc, data.descricao, data.idlivro];
    await client.query(query, livro);
  }
  
  export { selectUsuarios,  selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario, selectAnuncios,  selectAnuncio, insertAnuncio, deleteAnuncio, updateAnuncio, selectLivros,  selectLivro, insertLivro, deleteLivro, updateLivro};