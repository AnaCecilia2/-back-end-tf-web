import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";
import {
  selectAnuncios,
  selectAnuncio,
  insertAnuncio,
  deleteAnuncio,
  updateAnuncio,
  selectAnuncioId
} from "../db/index.js";

const router = Router();



router.get("/anuncio", async (req, res) => {
    console.log("Rota GET /anuncio solicitada");
    try {
      const anuncios = await selectAnuncios();
      res.json(anuncios);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  router.get("/anuncio/:nomeLivro",  async (req, res) => {
    console.log(`Rota GET /anuncio/${req.params.nomeLivro} solicitada`);
    try {
      const anuncio = await selectAnuncio(req.params.nomeLivro);
      if (anuncio.length > 0) 
        res.json(anuncio);
      else res.status(404).json({ message: "anuncio não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

//pega um anúncio pelo id
router.get("/usuario/:id",  async (req, res) => {
  console.log(`Rota GET /usuario/${req.params.id} solicitada`);
  try {
    const usuario = await selectAnuncioId(req.params.id);
    if (usuario.length > 0) 
      res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
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
      const anuncio = await selectAnuncio(req.body.idanuncio);
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
    console.log(req.userId)
  try {
    if (req.userId != req.params.id){
        const error = new Error ("Você não pode excluir este usuário");
        throw error;
    }
    await deleteUsuario(req.params.id);
    res.status(200).json({ message: "Usuário excluido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

  
  /*
  router.delete("/usuario/:id", verificarAutenticacao, async (req, res) => {
  console.log("Rota DELETE /usuario solicitada");
  // req.userId
  console.log(req.userId)
  try {
    if (req.userId != req.params.id){
        const error = new Error ("Você não pode excluir este usuário");
        throw error;
    }
    await deleteUsuario(req.params.id);
    res.status(200).json({ message: "Usuário excluido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

  */
  export default router;