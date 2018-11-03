const api = require("../api");


const novaForm = (req, res) => res.render("categorias/nova");

const nova = async (req, res) => {
  await api.add("/categorias", { categoria: req.body.categoria });
  res.redirect("/categorias");
};

const list = async (req, res) => {
  const categorias = await api.list("/categorias");
  res.render("categorias/index", { categorias });
};

const remove = async (req, res) => {
  await api.remove("/categorias", req.params.id);
  await api.remove("/publicacoes", req.params.id);
  res.redirect("/categorias");
};


const editarForm = async (req, res) => {
  const categoria = await api.get("/categorias", req.params.id);
  console.log("cateogria = ", categoria);

  res.render("categorias/editar", {
    categoria: categoria
  });
};

const editar = async (req, res) => {
    await api.update("/categorias", req.params.id, {
        categoria: req.body.categoria
    });

    res.redirect("/categorias");
};


module.exports = {
  novaForm,
  nova,
  list,
  remove,
  editarForm,
  editar
};
