const fs = require('fs/promises')
const Presona = require('./clase')


//// usando ASYNC-AWAIT///

let yo = new Presona("Pablo", "Molina", 31);
let myJson = JSON.stringify(yo);


async  function asyncAwait(){
    try{
        await fs.writeFile('reto1.1.json', myJson);
        const buffer = await fs.readFile('reto1.1.json', "utf-8")
        console.log(JSON.parse(buffer));
    } catch(err){
        console.log(err)
    }

}
asyncAwait()