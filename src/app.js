const express = require ('express');

const app = express();

const path = require ('path');

app.use(express.static('public'));

app.listen (3033, () => {
    console.log('Servidor corriendo en http://localhost:3033')
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.post('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})


