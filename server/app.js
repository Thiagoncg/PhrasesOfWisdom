const { request, response } = require('express');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const phrases = require("./src/dataPhrases.json");

//APP que Mostra todas as frases
app.get('/phrases', (request, response) => {
    return response.json(phrases);
});

//APP Acessa por indice passando por parametro na URL
app.get("/phrases/:id/find", (request, response) => {
    const index = request.params.id;
    return response.json(phrases.phrases[index]); 
});

//Sorteia uma frase dentro da lista de frases
app.get("/phrases/random", (request, response) => {
    const index = (Math.floor(Math.random() * phrases.phrases.length + 1));

    console.log(index);

    return response.json(phrases.phrases[index]); 
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000/phrases");
});
