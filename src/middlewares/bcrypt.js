const bcrypt = require("bcrypt");

// Encriptado de contraseñas
function Encrypt(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(Number(process.env.saltRounds), (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
}

function Compare(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  Compare,
  Encrypt,
};