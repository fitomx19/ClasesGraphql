//importamos graphql-yoga
import { GraphQLServer } from "graphql-yoga";
//importamos schema
import {typeDefs} from './graphql/typesDefs'
//importamos resolvers
import {resolvers} from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs,
    resolvers
    //si hay esquema , va a funcionar :D 
});

server.start({port: 3000} , ({port}) =>{
    console.log('El servidor esta en el puerto' , port); 
});