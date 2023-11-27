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
    const query = "SELECT * FROM usuario WHERE id = $1";
    const usuario = [id];
    const res = await client.query(query, usuario);
    return res.rows;
}

  async function insertUsuario(data) {
    const client = await connect();
    const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
    const usuario = [data.nome, data.senha, data.email];
    await client.query(query, usuario);
  }
  
  async function deleteUsuario(id) {
    const client = await connect();
    const query = "DELETE FROM usuario WHERE id = $1";
    await client.query(query, [id]);
  }

  async function updateUsuario(data) {
    const client = await connect();
    const query =
      "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
    const usuario = [data.nome, data.email, data.senha, data.id];
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
    const query = "SELECT * FROM anuncio WHERE id = $1";
    const anuncio = [id];
    const res = await client.query(query, anuncio);
    return res.rows;
}

  async function insertAnuncio(data) {
    const client = await connect();
    const query = "INSERT INTO anuncio (nome, preco,) VALUES ($1,$2) ";
    const usuario = [data.nome, data.preco];
    await client.query(query, usuario);
  }
  
  async function deleteAnuncio(id) {
    const client = await connect();
    const query = "DELETE FROM anuncio WHERE id = $1";
    await client.query(query, [id]);
  }

  async function updateAnuncio(data) {
    const client = await connect();
    const query =
      "UPDATE anuncio SET nome = $1, preco = $2 WHERE id = $4";
    const anuncio = [data.nome, data.preco, data.id];
    await client.query(query, anuncio);
  }

  
  /*
  async function selectTrocas() {
    const client = await connect();
    const res = await client.query("SELECT * FROM anuncio");
    return res.rows;
  }

  async function selectTroca(id) {
    const client = await connect();
    const query = "SELECT * FROM anuncio WHERE id = $1";
    const anuncio = [id];
    const res = await client.query(query, anuncio);
    return res.rows;
}

  async function insertTroca(data) {
    const client = await connect();
    const query = "INSERT INTO anuncio (nome, preco,) VALUES ($1,$2) ";
    const usuario = [data.nome, data.preco];
    await client.query(query, usuario);
  }
  
  async function deleteTroca(id) {
    const client = await connect();
    const query = "DELETE FROM anuncio WHERE id = $1";
    await client.query(query, [id]);
  }

  async function updateTroca(data) {
    const client = await connect();
    const query =
      "UPDATE anuncio SET nome = $1, preco = $2 WHERE id = $4";
    const usuario = [data.nome, data.email, data.senha, data.id];
    await client.query(query, usuario);
  }
  */
  export { selectUsuarios,  selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario, selectAnuncios,  selectAnuncio, insertAnuncio, deleteAnuncio, updateAnuncio/*, selectTrocas,  selectTroca, insertTroca, deleteTroca, updateTroca*/};