const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.urlencoded({extended:false}))


app.use(morgan("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

const storagePub = multer.diskStorage({
  destination: path.join(__dirname, "public/img/entradas"),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storagePub }).single("imagen-publicacion"));

const storagePer = multer.diskStorage({
  destination: path.join(__dirname, "public/img/perfiles"),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storagePer }).single("imagen-perfil"));

const CONNECTION_URL =
  "mongodb+srv://kuuhaku:Shinichi123@cluster0.cgmo7.mongodb.net/API-Hackaton?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
  })
  .then(() => app.listen(PORT, () => console.log(`Server en puerto ${PORT}`)))
  .catch((err) => console.log(err.message));

app.use("/api/entradas", require("./routes/entradas-routes"));
app.use("/api/usuarios", require("./routes/usuarios-routes"));
app.use("/api/imagenes",require("./routes/imagenes-routes"));
app.use("/api/categorias",require("./routes/categorias-routes"));
app.use("/api/reportes",require("./routes/reportes-routes"));
app.use("/api/comentarios",require("./routes/comentarios-routes"));
app.use("/api/notificaciones",require("./routes/notificaciones-routes"));
app.use("/api/favoritos",require("./routes/favoritos-routes"));

app.use("/forms/", require("./routes/forms-routes"));

app.use(express.static(path.join(__dirname, "public")));
