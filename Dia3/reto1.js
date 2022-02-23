const http = require('http');

const server = http.createServer(function(req, res)
{
    console.log('Request received form client');
    res.writeHead(200,{'Content-Type':'application/json'})
    // console.log(res.writeHead(200,{'Content-length':'text/plain'}));
    // console.log(res.writeHead(200,{'User-agent':'text/plain'}));
    console.log('Request URL ' + req.url);
    console.log('Request Method ' + req.method);
    if(req.url == '/bye'){
        let mensaje = {
            ok: true,
            message: 'Adios!'
        }
        res.write(JSON.stringify(mensaje));
    }
    else{
        let mensaje = {
            ok: true,
            message: 'Recibido!'
        }
        res.write(JSON.stringify(mensaje));
    }
    console.log(req.headers['content-length']);
    console.log(req.headers['user-agent'])
    console.log(req.headers['content-type']);
    res.end();
});

server.listen(3000)