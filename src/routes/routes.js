var express = require('express');
var router = express.Router();
//<<<<<<<<<<<<<<<<<<<<Controladores>>>>>>>>>>>>>>

// Registrar y Login
const { login, register } = require("../controllers/Users/Login-Register");
const { Add_Reservas } = require("../controllers/reserva");
//Usuario

const { GetUser, deleteUser, editUser, updatePassword, user_list } = require("../controllers/userControllers")
const { AggRoom, ListarRoom, UpdRoom, DeleteRoom } = require('../controllers/roomController');

// -------------------------Rutas-------------------

//Usuario

router.get("/User", user_list);
router.get("/User/:id/get", GetUser);
router.delete('/User/:id', deleteUser);
router.put('/User/:id/edit', editUser);
router.put('/User/:id/Password', updatePassword);

//Habitaciones

router.get("/habitaciones", ListarRoom);

router.post("/AggHabit", AggRoom);

router.put("/rooms/:id", UpdRoom);

router.delete("/rooms/:id", DeleteRoom);


//Registro
router.post("/registro", register);

//Login
router.post("/login", login);

//Reservas
router.post("/Add_Reservas", Add_Reservas);

module.exports = router;
