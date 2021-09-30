"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require("express-graphql");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _database.connect)();
app.set("port", process.env.PORT || 8000);

app.get('/', function (req, res) {
    res.json({
        message: "hola mundo"
    });
});

app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
    graphiql: true,
    schema: _schema2.default
}));

app.listen(app.get("port"), function () {
    console.log("server on port " + app.get("port"));
});
//# sourceMappingURL=index.js.map