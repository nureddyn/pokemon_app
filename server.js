const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get('/', (req, res) => {
    res.render('Index');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.listen(5000, () => {
    console.log("visit: localhost:5000");
});