import { makeExecutableSchema } from  'graphql-tools';
import { resolvers} from './resolvers';

const typeDefs = `
    type Query{
        hello:String
        tasks: [Task]
        search(_id : ID):  [Task]
        QueryMascotas: [Mascota]
    }
    type Task {
        _id: ID!
        title: String!
        descripcion: String
    }
    type Mascota {
        _id: ID!
        nombre: String
        edad: Int
        mascota:String
    }

    input TaskInput {
        title: String!
        
    }

    input MascotaInput {
        _id: ID
        nombre: String
        edad: Int
        mascota:String
    }

    type Mutation {
        createTask(input: TaskInput) : Task
        createMascotas(input: MascotaInput) : Mascota
        updateMascotas(_id:ID , input: MascotaInput): Mascota
        deleteMascotas(_id:ID): Mascota
    }

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})