const express = require('express');
const ejs = require('ejs');
const server = express();
const path = require('path');
const createError = require('http-errors');
const { create } = require('domain');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/public', express.static(path.join(__dirname, 'style')));

server.get('/api/coffee-description', (req, res) => {
    res.send('опис');
});

server.get('/api/coffee-price', (req, res) => {
    res.send({ price: 20000 });
})

server.get('/api/coffee-specs', (req, res) => {
    res.send({ specs: 'характеристики'});
})

server.use((res, req, next) => {
    next(createError(404));
})

server.use((err, req, res, next) => {

    const code = err.status || 500;

    res.status(code);
    res.end(`Error: ${code}`);
    console.log(createError(err));
})

server.listen(3000);

