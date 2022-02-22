const fs = require('fs');
const rdl = require('readline');

class Presona{

    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}



let yo = new Presona("Pablo", "Molina", 31);



let myJson = JSON.stringify(yo);

fs.writeFile('reto2.json', myJson, function(){
    fs.readFile('reto2.json', 'utf-8', function(err,res){ //la función necesaria paara que funcione necesita parametros, el posible error como valor y el dato que necesitamos leer//
        if(err){
            console.log("Error")
        }
        else{
        console.log(res)}
    })
})