import express from 'express';


const crypto = require('crypto');

const app = express()


app.get('/fast', (req, res) => {

    res.send('fast ')
})
app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('hi there')
    })

}).listen(3000)
