import  express  from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();
app.set("port", process.env.PORT || 8000);

app.get('/',(req,res)=>{
    res.json({
        message: "hola mundo"
    })
});

app.use('/graphql' , graphqlHTTP({
    graphiql: true,
    schema:schema
}))


app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
  });