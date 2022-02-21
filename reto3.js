const fs = require('fs');
const readline = require('readline');
const Presona = require('./persona')
// const rl = readline.createInterface(process.stdin, process.stdout);



const rl = readline.createInterface(
	process.stdin, process.stdout);


 rl.question('Cómo te llamas? ', (name) =>{
    console.log('Te llamas ' + name);

    rl.question('Cuál es tu apellido? ', (surname) =>{
        console.log('Te apellidas ' + surname);

         rl.question('Cuál es tu edad? ', (age) =>{
            console.log('Tienes ' + age + ' años.');

            rl.close();

            let yo = new Presona(name, surname, age);

            console.log(yo)

            let momoa = JSON.stringify(yo);
            fs.writeFile('reto3.json', momoa, function(){
                fs.readFile('reto3.json','utf-8', function(error, res){
                    if(error){
                        console.log("Error")
                    }
                    else
                    {
                       console.log(res)
                       
                    }
                })
            } )
        })
    })
})