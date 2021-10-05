export const typeDefs = `
    type Query{
        ping: String
        tienda: [Tienda]
    }
    type Tienda {
        id: ID!
        sucursal: String!
        administrador: String!
    }
`