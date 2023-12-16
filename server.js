const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemons: pokemon});
});


app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]});
});

app.get('/new', (req, res) => {
    res.render('New');
});

app.post('/new', (req, res) => {
    if (req.body.name) {
        pokemon.push(req.body);
    }
    res.redirect('/pokemon');
});

app.listen(3000, () => {
    console.log("visit: localhost:3000");
});