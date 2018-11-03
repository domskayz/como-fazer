const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const categorias = require("./routes/categorias");
const publicacoes = require("./routes/publicacoes");


app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

const port = process.env.port || 3000;

app.get("/", async (request, response) => response.render("index"));

app.use("/categorias", categorias);
app.use("/publicacoes", publicacoes);

app.listen(
  port,
  error =>
    error ? console.log("error", error) : console.log("server runing", port)
);
