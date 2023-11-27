/*import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";
import {
  selectAnuncios,
  selectAnuncio,
  insertAnuncio,
  deleteAnuncio,
  updateAnuncio,
} from "../db/index.js";

const router = Router();


router.get("/anuncio", verificarAutenticacao, async (req, res) => {
    console.log("Rota GET /usuario solicitada");
    try {
      const anuncio = await selectAnuncios();
      res.json(anuncio);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.get("/anuncio/:id", verificarAutenticacao,  async (req, res) => {
    console.log(`Rota GET /anuncio/${req.params.id} solicitada`);
    try {
      const anuncio = await selectAnuncio(req.params.id);
      if (anuncio.length > 0) res.json(anuncio);
      else res.status(404).json({ message: "anuncio não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.post("/anuncio", verificarAutenticacao, async (req, res) => {
    console.log("Rota POST /anuncio solicitada");
    try {
      await insertAnuncio(req.body);
      res.status(201).json({ message: "anuncio inserido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.put("/anuncio", verificarAutenticacao,  async (req, res) => {
    console.log("Rota PUT /anuncio solicitada");
    try {
      const anuncio = await selectAnuncio(req.body.id);
      if (anuncio.length > 0) {
        await updateAnuncio(req.body);
        res.status(200).json({ message: "anuncio atualizado com sucesso!" });
      } else res.status(404).json({ message: "anuncio não encontrado!" });
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.delete("/anuncio/:id", verificarAutenticacao,  async (req, res) => {
    console.log("Rota DELETE /anuncio solicitada");
    try {
      await deleteAnuncio(req.params.id);
      res.status(200).json({ message: "anuncio excluido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  export default router;
  */