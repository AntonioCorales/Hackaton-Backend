const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

const CONNECTION_URL = 'mongodb+srv://kuuhaku:Shinichi123@cluster0.cgmo7.mongodb.net/API-Hackaton?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(()=>app.listen(PORT,()=>console.log(`Server en puerto ${PORT}`)))
.catch(err=>console.log(err.message));


app.use('/api/entradas',require('./routes/entradas-routes'));
app.use('/api/usuarios',require('./routes/usuarios-routes'));
