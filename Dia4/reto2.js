const Professional = require ('./professional');
const express = require ('express');
const app = express();
const port = 5000;

let prof1 = new Professional("Quentin Tarantantino", 57, "male", 70, 178, "blonde", "brown", "caucasian", false, "EEUU", 7, "director");
let prof2 = new Professional("Quentin Inventino", 82, "male", 90, 185, "blonde", "brown", "caucasian", false, "EEUU", 0, "liar");
let prof3 = new Professional("Sam Raimi", 48, "male", 83, 185, "blonde", "brown", "caucasian", false, "EEUU", 35, "director");
let prof4 = new Professional("Steven Spielberg", 63, "male", 80, 180, "blonde", "brown", "caucasian", false, "EEUU", 0, "director");
let prof5 = new Professional("Manuel Loureiro", 45, "male", 90, 190, "blonde", "brown", "caucasian", false, "Spain", 0, "writer");
let prof6 = new Professional("Jackie Chan", 67, "male", 80, 177, "blonde", "brown", "caucasian", false, "China", "over nine thousand!!", "dios");

let profesionales = [prof1, prof2, prof3, prof4, prof5, prof6]
// let profesionales = null

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.all("/", (req, res)=>
        {
            let mensaje = {err:false, codigo: 200, mensaje: "Starting point"};
            res.send(mensaje);
        }
);
app.get("/profesionales",
        function(req, res)
        {
            let id = req.query.id;

            if(profesionales== null){
                let mensaje = {err:true, codigo: 200, mensaje: "No hay informacion"};
            res.send(mensaje)
            }
            else if(profesionales !=null && id!=null){

                if(profesionales[id]!= null){

                    let mensaje = {err:false, codigo: 200, mensaje: profesionales[id]};
                    res.send(mensaje)
                }
                else{

                    let mensaje = {err: true, codigo: 204, mensaje: 'ERROR 204 -- NO CONTENT'};
                    res.send(mensaje)
                }
            }
            else{
            let mensaje = {err:false, codigo: 200, mensaje: profesionales};
            res.send(mensaje)}
        }

);
app.post("/profesionales",
            function(req, res)
            {
                for(let i = 0; i < profesionales.length; i++){
                    // let id = res.query.id

                    if(req.body != profesionales[i]){

                        profesionales.push(req.body);
                        let mensaje = {err: false, codigo: 200, mensaje: 'Perfil creado con exito.', nuevoPerfil: req.body, perfliesActuales: profesionales};
                        res.send(mensaje)
                    }
                    else{
                        let mensaje = {err: true, codigo: 200, mensaje: 'El susodicho perfil ya existe.'};
                        res.send(mensaje)
                    }
            }
            }
);
app.put("/profesionales",
            function(req, res)
            {
                for(let i = 0; i < profesionales.length; i++){
                    if(req.body == profesionales[i]){

                        profesionales.push(req.body);
                        let mensaje = {err: false, codigo: 200, mensaje: 'Perfil MOdificado con exito con exito.', nuevoPerfil: req.body};
                        res.send(mensaje)
                    }
                    else{
                        let mensaje = {err: true, codigo: 200, mensaje: 'El susodicho perfil no existe.'};
                        res.send(mensaje)
                    }
            }
            }
);
app.delete("/profesionales",
                function(req, res)
                {
                    let id = req.body.id
                    profesionales.splice(id)
                    // console.log(profesionales)
                    let mensaje  = {err: false, codigo: 200, mensaje: 'El perfil ha sido funado.', perfil: profesionales}
                    res.send(mensaje)
                }
)
app.use(function(req, res, next){
    let mensaje = {err: true, codigo: 404, mensaje: 'ERROR 404--NOT FOUND'};
    res.status(404).send(mensaje);

});
app.listen(port,"localhost",()=>{
console.log('Server is ready in ' + port + ' localhost EXPRESS')
})