// Imports pequeño array de usuarios
// Fingimos que es una solicitud a una API
const users = require("./data");

// Fetches all users
const getUsers = () => {
  return users;
};

// Función para filtrar usuarios por ID específico
const getUser = (id) => {
  // Buscamos al usuario con el ID proporcionado
  const user = users.find((user) => user.id === id);
  // Si encontramos al usuario, lo devolvemos y mostramos sus datos
  if (user) {
    console.log("Datos del usuario encontrado de get users:",user);
    return user;
  } else {
    // Si no encontramos al usuario, enviamos un mensaje y devolvemos null
    console.log(`La ID ${id} no está disponible en getUser.`);
    return null;
  }
};


// test
//console.log(getUser(5));


// Función para recuperar datos de usuario por ID
const fetchUserData = (id) => {
  return new Promise((resolve, reject) => {
    // Simulando una llamada asíncrona a una API con setTimeout
    setTimeout(() => {
      // Buscamos al usuario con el ID proporcionado
      const user = getUser(id);
      // Si encontramos al usuario, resolvemos la promesa con sus datos
      if (user) {
        console.log(`Datos del usuario con ID ${id} recuperados correctamente de fetch.`,user);
        resolve(user);
      } else {
        // Si no encontramos al usuario, rechazamos la promesa con un error y un mensaje
        const error = new Error("Usuario no encontrado");
        console.log(`La ID ${id} no está disponible en fech.`);
        reject(error);
      }
    }, 1000); // Simulamos un retardo de 1 segundo
  });
};


// Exportamos las funciones para que puedan ser utilizadas fuera de este archivo
module.exports = { getUsers, getUser, fetchUserData };

