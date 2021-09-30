const functions = require("firebase-functions");
const express = require("express")
const app = express()

const axios = require('axios');
const {query} = require("express");
const {print} = require("graphql");
const gql = require("graphql-tag");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
    
    app.set('view engine' , 'ejs');
    app.use(express.urlencoded({
        extended:false
    }))

    

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
        response.render("index", {data: datos} );
    });
   
});
  
 });
