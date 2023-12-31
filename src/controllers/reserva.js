const model = require("../models/reserva");

const Add_Reservas = async(req, res) => {
   try {
      //Se reciben los parametros enviados en el body en un objeto llamado json.
      const json = {
         Cedula:   req.body.Cedula,
         Name:     req.body.Name,
         Email:    req.body.Email,
         Movil:    req.body.Movil,
         Telefono: req.body.Telefono,
         PrimeraN: req.body.PrimeraN,
         UltimaN:  req.body.UltimaN,
         CargaF:   req.body.CargaF,
         Comment:  req.body.Comment,
         Status:   "Pendiente"
         
      };
      // Validamos que no falten datos en el objeto json
      if (!json.Cedula && !json.Name) {
          return res
         .status(400)
         //Si el error es 400 es por qué no se estan transfiriendo los valores correctos.  
         .json({ message: "Los valores son Requeridos", status: 400 });
         //Se muestra el mensaje, indicando las posibles causas, en este caso categoria es una sola columna llamada name.
       }
       //Se almacena en data el json
       const data = new model(json);
       await data.save();
       //Se guarda la data utilizando los parametro data.save.
 
       //Se valida la respuesta de la base de datos, dependiendo se muestra el mensaje de exito de lo contrario el
       //mensaje de error.
       res
       .status(200)
       .json({ message: "Reserva agregada exitosamente!", status: 200 });
    } catch (error) {
       console.log("Error", error);
       res
       .status(500)
       .json({ message: "Error al intentar agregar la Reserva", status: 500 });
    }
 }
 module.exports = { Add_Reservas};