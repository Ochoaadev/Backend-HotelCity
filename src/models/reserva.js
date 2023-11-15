const mongoose = require('mongoose')

const reserva = new mongoose.Schema(
    {
        DNI:{
            type: String
        },
        Nombre_Completo:{
            type:String,
            required: true
        },
        Email:{
            type: String,
            required: true,
            unique: true
        },
        Movil:{
            type: String,
        },
        Telefono:{
            type: Number,
            uniqued: false,
            required: false
        }
    }
)

module.exports = mongoose.model('reservas', reserva)