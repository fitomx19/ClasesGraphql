import { makeExecutableSchema } from  'graphql-tools';
import { resolvers} from './resolvers';

const typeDefs = `
    type Query{
        hello:String
        tasks: [Task]
        search(_id : ID):  [Task]
    }
    type Task {
        _id: ID!
        title: String!
        descripcion: String!

    }

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})