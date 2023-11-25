import { selectUsuarios, selectUsuario, insertUsuario,  deleteUsuario, updateUsuario } from "./db/index.js";
import dotenv from "dotenv";
import express from "express";  
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";

dotenv.config();

const app = express();              
const port = 3000;                  

app.use(express.json());



app.get("/", (req, res) => {       
  res.json({
    nome: "Venda de Livros",     
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {          
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(roteadorUsuario);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));