const Professional = require ('./professional');
const express = require ('express');
const app = express();

const port = 8000;

let prof = new Professional("Quentin Tarantantino", 57, "male", 70, 178, "blonde", "brown", "caucasian", false, "EEUU", 7, "director");
// let prof = null

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.all("/", (req, res)=>
        {
            let mensaje = {err:false, codigo: 200, mensaje: "Starting point"};
            res.send(mensaje);
        }
);
app.get("/professional",
        function(req, res)
        {
            if(prof== null){
                let mensaje = {err:true, codigo: 200, mensaje: "El susodicho profesional no existe"};
            res.send(mensaje)
            }
            else{
            let mensaje = {err:false, codigo: 200, mensaje: prof, };
            res.send(mensaje)}
        }

);
app.post("/professional",
        function(req, res)
        {
            
            if(prof==null){
                prof = req.body
                let mensaje = {err:false, codigo: 200, mensaje: prof, };
                res.send(mensaje)}
            else{
                let mensaje = {err:true, codigo: 200, mensaje: "Ya  existe"};
                res.send(mensaje)
            }
        }

);
app.put("/professional",
        function(req, res)
        {
            
            if(prof!=null){
                // prof = req.body
                let mensaje = {err:false, codigo: 200, antiguo: prof, actualizada: req.body };
                res.send(mensaje)}
            else{
                let mensaje = {err:true, codigo: 200, mensaje: "No existe"};
                res.send(mensaje)
            }
        }
);
app.delete("/professional",
        function(req, res)
        {
            
            if(prof!=null){
                let mensaje = {err:false, codigo: 200, mensaje: "El perfil ha sido funado."};
                res.send(mensaje)}
            else{
                let mensaje = {err:true, codigo: 200, mensaje: "No se puede borrar la nada."};
                res.send(mensaje)
            }
        }
);
app.use(function(req, res, next){
            let mensaje = {err: true, codigo: 404, mensaje: 'ERROR 404--NOT FOUND'};
            res.status(404).send(mensaje);

        });
app.listen(port,"localhost",()=>{
    console.log('Server is ready in ' + port + ' localhost EXPRESS')
})