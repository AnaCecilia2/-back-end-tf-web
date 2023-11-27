import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";
import {
  selectLivros,  
  selectLivro, 
  insertLivro, 
  deleteLivro, 
  updateLivro
} from "../db/index.js";

const router = Router();


router.get("/livro", verificarAutenticacao, async (req, res) => {
    console.log("Rota GET /livro solicitada");
    try {
      const livro = await selectLivros();
      res.json(livro);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.get("/livro/:id", verificarAutenticacao,  async (req, res) => {
    console.log(`Rota GET /livro/${req.params.id} solicitada`);
    try {
      const livro = await selectLivro(req.params.id);
      if (livro.length > 0) res.json(livro);
      else res.status(404).json({ message: "livro não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.post("/livro", verificarAutenticacao, async (req, res) => {
    console.log("Rota POST /livro solicitada");
    try {
      await insertLivro(req.body);
      res.status(201).json({ message: "livro inserido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.put("/livro", verificarAutenticacao,  async (req, res) => {
    console.log("Rota PUT /livro solicitada");
    try {
      const livro = await selectLivro(req.body.id);
      if (livro.length > 0) {
        await updateLivro(req.body);
        res.status(200).json({ message: "livro atualizado com sucesso!" });
      } else res.status(404).json({ message: "livro não encontrado!" });
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.delete("/livro/:id", verificarAutenticacao,  async (req, res) => {
    console.log("Rota DELETE /livro solicitada");
    try {
      await deleteLivro(req.params.id);
      res.status(200).json({ message: "livro excluido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  export default router;
  