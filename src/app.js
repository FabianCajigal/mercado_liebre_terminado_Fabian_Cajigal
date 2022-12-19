const express = require ('express');

const app = express();

const path = require ('path');

app.use(express.static('public'));

const port = process.env.PORT || 3033;gi
app.listen(port, () => 
    console.log('Servidor corriendo en el puerto http://localhost:' + port);
);

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.post('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})


