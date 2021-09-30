'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\n    type Query{\n        hello:String\n        tasks: [Task]\n        search(_id : ID):  [Task]\n        QueryMascotas: [Mascota]\n    }\n    type Task {\n        _id: ID!\n        title: String!\n        descripcion: String\n    }\n    type Mascota {\n        _id: ID!\n        nombre: String\n        edad: Int\n        mascota:String\n    }\n\n    input TaskInput {\n        title: String!\n        \n    }\n\n    input MascotaInput {\n        _id: ID\n        nombre: String\n        edad: Int\n        mascota:String\n    }\n\n    type Mutation {\n        createTask(input: TaskInput) : Task\n        createMascotas(input: MascotaInput) : Mascota\n        updateMascotas(_id:ID , input: MascotaInput): Mascota\n        deleteMascotas(_id:ID): Mascota\n    }\n\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: _resolvers.resolvers
});
//# sourceMappingURL=schema.js.map