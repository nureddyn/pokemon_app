const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get('/', (req, res) => {
    res.render('Index', {pokemons: pokemon});
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemonIndex: req.params.id});
});

// app.get('/show', (req, res) => {
//     res.render('Show');
// });

app.listen(5000, () => {
    console.log("visit: localhost:5000");
});