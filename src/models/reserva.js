const mongoose = require('mongoose')

const reserva = new mongoose.Schema(
    {
        Cedula:{
            type: String
        },
        Name:{
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
        },
        PrimeraN:{
            type: Date,
            uniqued: false,
            required: false
        },
        UltimaN:{
            type: Date,
            uniqued: false,
            required: false
        },
        CargaF:{
            type: Number,
            uniqued: false,
            required: false
        },
        Comment:{
            type: String,
            uniqued: false,
            required: false
        },
        Status:{
            type: String,
            uniqued: false,
            required: false
        },
        Motivo:{
            type:String,
            required: false
        }
    }
)

module.exports = mongoose.model('reservas', reserva)