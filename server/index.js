// const express = require('express');
import express from 'express';

const app = new express();

app.use(express.static('dist'));

app.get('/', async (_req, res) => {
  res.send(
    `<h2>Hello World!</h2>`
  )
});

app.listen(5555);
console.log('Server is listening on 5555');
