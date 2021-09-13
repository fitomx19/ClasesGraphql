import  express  from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get('/',(req,res)=>{
    res.json({
        message: "hola mundo"
    })
});

app.use('/graphql' , graphqlHTTP({
    graphiql: true,
    schema:schema
}))


app.listen(8000, () => console.log("server on port 8000"));
