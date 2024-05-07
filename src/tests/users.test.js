// Importa los métodos que deseas probar
const { getUser, getUsers, fetchUserData } = require("../users");

// Suite de pruebas para el método getUsers()
describe("getUsers() method", () => {
  // Caso de prueba para verificar si getUsers() devuelve un array de usuarios
  test("should return an array of users", () => {
    // Llama a getUsers para obtener el array de usuarios
    const users = getUsers();
    // Verifica que el valor devuelto sea un array
    expect(Array.isArray(users)).toBe(true);
    // Puedes agregar más aserciones para verificar la estructura o el contenido del array de usuarios si es necesario
  });
});
//-------------------------------------------------------------------------
// Suite de pruebas para el método getUser(id)
describe("getUser(id) method", () => {
  // Caso de prueba para verificar si getUser(id) devuelve el objeto de usuario correcto para un ID existente
  test("should return correct user object for existing ID", () => {
    // Define un ID de usuario existente
    const existingUserID = 4;
    // Llama a getUser con el ID de usuario existente
    const user = getUser(existingUserID);
    // Verifica que el objeto de usuario devuelto tenga el ID correcto
    expect(user.id).toBe(existingUserID);
  });

  //-------------------------------------------------------------------------

  // Prueba para verificar si getUser(id) devuelve null para un ID no existente
  test("should return null for non-existing ID", () => {
    // Define un ID de usuario no existente
    const nonExistingUserID = 200;
    // Llama a getUser con el ID de usuario no existente
    const user = getUser(nonExistingUserID);
    // Verifica que el valor devuelto sea null
    expect(user).toBeNull();
  });
});

// Suite de pruebas para el método fetchUserData(id)
describe("fetchUserData(id) method", () => {
  // Prueba para verificar si fetchUserData(id) resuelve con el objeto de usuario correcto para un ID existente
  test("should resolve with correct user object for existing ID", () => {
    // Define un ID de usuario existente
    const existingUserID = 2;
    // Llama a fetchUserData con el ID de usuario existente
    return expect(fetchUserData(existingUserID)).resolves.toEqual(expect.objectContaining({ id: existingUserID }));
  });

  // Prueba para verificar si fetchUserData(id) rechaza con 'Usuario no encontrado' para un ID no existente
  test("should reject with 'Usuario no encontrado' for non-existing ID", () => {
    // Define un ID de usuario no existente
    const nonExistingUserID = 8;
    // Llama a fetchUserData con el ID de usuario no existente
    return expect(fetchUserData(nonExistingUserID)).rejects.toThrow("Usuario no encontrado");
  });
});
