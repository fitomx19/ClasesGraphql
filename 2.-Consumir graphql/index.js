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
        console.log(datos)
    });
    res.send("hola mundo");
});

app.listen(port, () =>{
    console.log("Server funcionando")
})