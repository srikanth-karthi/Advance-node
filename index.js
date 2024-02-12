import express from 'express';

import cluster from 'cluster';

if (cluster.isMaster) {
    cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
} else {
    const crypto = require('crypto');

    const app = express()

    
    app.get('/fast', (req, res) => {
     
        res.send('fast ')
    })
    app.get('/', (req, res) => {
        crypto.pbkdf2('a','b',100000,512,'sha512',()=>
{
    res.send('hi there')
})
     
    }).listen(3000)
}