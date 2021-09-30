const express = require("express")
const app = express()
const port = 9000
const axios = require('axios');
const {query} = require("express");
const {print} = require("graphql");
const gql = require("graphql-tag");
const serverless = require("serverless-http");
const url = "https://servergraphqladolfo.herokuapp.com/graphql"
const router = express.Router();

app.set('view engine' , 'ejs');
app.use(express.urlencoded({
    extended:false
}))


app.set("port", process.env.PORT || 8000);

app.get('/' , (req,res) =>{
    axios("https://servergraphqladolfo.herokuapp.com/graphql",{
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
    axios('https://servergraphqladolfo.herokuapp.com/graphql',{
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

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
  });

