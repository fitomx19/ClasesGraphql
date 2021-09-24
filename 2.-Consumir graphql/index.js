const express = require("express")
const app = express()
const port = 9000
const axios = require('axios');
const {query} = require("express");
const {print} = require("graphql");
const gql = require("graphql-tag");

const url = "http://localhost:8000/graphql"


app.set('view engine' , 'ejs');
app.use(express.urlencoded({
    extended:false
}))

app.get('/' , (req,res) =>{
    axios("http://localhost:8000/graphql",{
        method: 'post',
        data: {
            query: `
            query{
                QueryMascotas{
                  _id
                  nombre
                  edad
                  mascota
                }
              }
            `
        }
    }).then((result) =>{
        let datos = result.data.data;
        //console.log(datos)
        res.render("index", {data: datos} );
    });
   
});


app.post('/agregar-mascota', (req,res) => {
    const body = req.body;
    let {nombre,edad,mascota} = body;
    let name = nombre;
    let age = parseInt(edad); // convertir string => int 
    let pet = mascota;
    axios('http://localhost:8000/graphql',{
        method: 'post', // metodo
        data: { //parametros
            query:  
            `mutation($nombre:String! , $edad: Int , $mascota: String) {
                createMascotas(input:{
                nombre:$nombre,
                edad: $edad,
                mascota: $mascota
                }) {
                nombre
                edad
                _id
                mascota
                }
            }
            `,
        variables: {
            nombre:name,
            edad:age,
            mascota:pet
        } 
    }

    }).catch(err => console.log(err));
    res.redirect("/");

})

app.listen(port, () =>{
    console.log("Server funcionando")
})