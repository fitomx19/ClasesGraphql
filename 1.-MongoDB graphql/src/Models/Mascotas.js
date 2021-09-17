import {Schema, model} from "mongoose"

const MascotasSchema = new Schema({
    nombre:{
        type:String,
        required: true
    },
    edad: Number,
    mascota: String
})

export default model('Mascota', MascotasSchema);