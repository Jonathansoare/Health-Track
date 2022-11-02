const express = require("express")
const bodyParser = require("body-parser")
const port = 5000

const app = express()
app.set('view engine','ejs');

app.get('/home',async (req,res) => {
    res.render("../views/dashboard")
})

app.get("/", async (req,res) => {
    res.json({nome:"jonathan",email:"jonathanSoares@gmail.com"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na portar ${port}`);
})
