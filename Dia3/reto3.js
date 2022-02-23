const express = require('express')
const app = express()

app.get ('/', function(req,res)
{
    // res.send('Mira la consola')
    console.log('Peticion recibida del cliente')
    console.log('Requested URL ' + req.url)
    console.log('Requested METHOD ' + req.method)
    console.log('Requested AGENT ' + req.headers['user-agent'])
    
    let mensaje = {
        ok: true,
        message: 'Recibido!'
    }
    res.send(JSON.stringify(mensaje));
});

app.get ('/bye', function(req,res)
{
    console.log('Peticion recibida del cliente')
    console.log('Requested URL ' + req.url)
    console.log('Requested METHOD ' + req.method)
    console.log('Requested AGENT ' + req.headers['user-agent'])
    
    let mensaje = {
        ok: true,
        message: 'Adios!'
    }
    res.send(JSON.stringify(mensaje));
})

app.listen(7000)