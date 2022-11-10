const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const phrases = require("./src/dataPhrases.json");
let index;

//mostra todas as frases
app.get('/phrases', (request, response) =>{
    return response.json(phrases);
});

//acessa uma frase por indice
app.get("/phrases/:id/find", (request, response) => {
    const index = request.params.id;
    return response.json(phrases.phrases[index]); 
});

//Sorteia uma frase
app.get("/phrases/frase", (request, response) => {
    const index = (Math.floor(Math.random() * phrases.phrases.length + 1));

    console.log(index);

    return response.json(phrases.phrases[index]); 
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:3000/phrases");
});

//nodemon = npm install --save-dev nodemon
//nodemon app.js