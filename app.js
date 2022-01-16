const express = require('express');

const app = express();

//app.use((req, res, next) => {
//    console.log('app started.');
//    next();
//});

//app.use((req, res, next) => {
//    console.log('app started.');
//    res.send('<p>Assignment solved (almost!)</p>');
//});

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The /users handler.</p>');
});


app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The / handler.</p>');
});

app.listen(3000);