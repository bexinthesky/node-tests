const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users
// Give users a name prop and an age prop
app.get('/users', (req, res) => {
    res.send([{
        name: 'Usagi',
        age: 21
    }, {
        name: 'Mamoru',
        age: 24
    }, {
        name: 'Chibiusa',
        age: 11
    }]);
});

app.listen(3000);
module.exports.app = app;