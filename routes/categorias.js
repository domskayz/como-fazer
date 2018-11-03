const express = require("express");
const router = express.Router();
const controller = require("../controlers/categorias");


router.get("/nova", controller.novaForm);
router.post("/nova", controller.nova);
router.get("/", controller.list);
router.get("/excluir/:id", controller.remove);
router.get("/editar/:id", controller.editarForm);
router.post("/editar/:id", controller.editar );


module.exports = router;

