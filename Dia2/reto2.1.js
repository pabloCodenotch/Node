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


async function asyncAwait(){

    let yo = new Presona();

    try{
         let  nombre = await pregunta('Cómo te llamas?')
            yo.name= nombre
            console.log('Te llamas ' + nombre)

         let apellido = await pregunta('Cómo te apellidas?')
            yo.surname= apellido
            console.log('Tu apellido es: ' + apellido)

         let edad = await pregunta('Cuántos años tienes?')
            yo.age= edad
            console.log('Tienes  ' + edad + ' años')

         let myJson = JSON.stringify(yo);

         await fs.writeFile('reto2.1.json', myJson);
        const buffer = await fs.readFile('reto2.1.json', "utf-8")
        console.log(JSON.parse(buffer));

    } catch(err){
        console.log(err)
    }
}

asyncAwait()