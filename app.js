const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('app started.');
    next();
});

app.use((req, res, next) => {
    console.log('app started.');
    res.send('<p>Assignment solved (almost!)</p>');
});

app.listen(3000);