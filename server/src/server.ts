import express from 'express';

const app = express();

//Rotas
app.get('/ads', (req, res) => {
    return res.json([
        { id:1, nome: "A" },
        { id:2, nome: "B" },
        { id:3, nome: "C" },
    ])
})

app.listen(3333)