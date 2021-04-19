const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 2500;
const cors = require("cors");
const bodyParser = require("body-parser");
const ONLINE_DB = "mongodb+srv://leemah:leemah@cluster0.dur4z.mongodb.net/supermart?retryWrites=true&w=majority";

const app = express ();

mongoose.connect(ONLINE_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then( () =>{    
    console.log("Connected to dataBase!");
});

app.use(express.json())

app.use(bodyParser.json());

app.use(cors())

app.use("/", require("./MVC/controller"));

app.listen(port, ()=>{
    console.log(`${port} is ready.....!`);
});