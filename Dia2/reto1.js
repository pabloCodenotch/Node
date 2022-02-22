const fs = require('fs/promises')
const Presona = require('./clase')

let yo = new Presona("Pablo", "Molina", 31);

let myJson = JSON.stringify(yo);

fs.writeFile('reto1.json', myJson)
.then( ()=>{
    console.log("Escribiendo")
    return fs.readFile('reto1.json', "utf-8");
})
.then( (data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Error");
    console.log(err);
})

