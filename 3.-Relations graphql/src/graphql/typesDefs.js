export const typeDefs = `
    type Query{
        ping: String
        tienda: [Tienda]
        provedores: [Provedores]
        productos: [Productos]
        
    }
    type Tienda {
        id: ID!
        sucursal: String!
        administrador: String!
        provedores: [Provedores]
    }
    type Provedores {
        id: ID!
        nombre: String!
        frecuencia: String
        productos: [Productos]
    }
    type Productos {
        id: ID!
        nombre: String!     
        precio: Int!
    }
 
`