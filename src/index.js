import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import roteadorAnuncio from "./routes/anuncio.js";

dotenv.config();
import {
  selectUsuario,
  selectUsuarios,
  insertUsuario,
  deleteUsuario,
  updateUsuario,
  selectAnuncios,
  selectAnuncio,
  insertAnuncio,
  deleteAnuncio,
  updateAnuncio,
} from "./db/index.js";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorAnuncio);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    nome: "Venda de Livros",
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});
