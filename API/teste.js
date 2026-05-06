import express from 'express';

const app = express();
const port = 3000;

app.get(("/"), (req, res) => {
    res.send("Devolvendo alguma coisa na requisição");
});

app.listen((port), () => {
    console.log(`Servidor executando na porta: ${port}`);
});