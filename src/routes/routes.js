var express = require('express');
var router = express.Router();
//<<<<<<<<<<<<<<<<<<<<Controladores>>>>>>>>>>>>>>

// Registrar y Login
const { login, register } = require("../controllers/Users/Login-Register");
const { Add_Reservas } = require("../controllers/reserva");
//Usuario
const { GetUser, deleteUser, editUser, updatePassword, user_list } = require("../controllers/userControllers");


// -------------------------Rutas-------------------

//Usuario

router.get("/User", user_list);
router.get("/User/:id/get", GetUser);
router.delete('/User/:id', deleteUser);
router.put('/User/:id/edit', editUser);
router.put('/User/:id/Password', updatePassword);

//Registro
router.post("/registro", register);

//Login
router.post("/login", login);

//Reservas
router.post("/Add_Reservas", Add_Reservas);

module.exports = router;
