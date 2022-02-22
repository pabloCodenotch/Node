const fs = require('fs/promises')
const Presona = require('./clase')
const readline = require('readline')

function pregunta(pregunta){
    const question = new Promise((resolve, reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let yo = new Presona();

pregunta('Cómo te llamas?')
    .then((nombre)=>{

            yo.nombre = nombre;
            console.log('Tu nombre es: ' + nombre);
            return pregunta('Cómo te apellidas?');
    })
.then((apellido)=>{

    yo.apellido = apellido;
    console.log('Tu apellido es: ' + apellido);
    return pregunta('Cuántos años tienes?');
})
.then((edad)=>{

    yo.edad = edad;
    console.log('Tienes ' + edad + 'años');
    let momoa = JSON.stringify(yo);
    return fs.writeFile('reto1.json', momoa);
})
.then(()=>{
    console.log("Escrito");
    return fs.readFile('reto1.json', "utf-8");
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Error")
    console.log(err)
})