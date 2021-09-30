"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var MascotasSchema = new _mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: Number,
    mascota: String
});

exports.default = (0, _mongoose.model)('Mascota', MascotasSchema);
//# sourceMappingURL=Mascotas.js.map