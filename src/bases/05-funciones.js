// Funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar("Flor1"));
console.log(saludar2("Flor2"));
console.log(saludar3("Flor3"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "Test",
  };
};
console.log(getUser());

const getUser1 = () => ({
  uid: "ABC123",
  username: "Test",
});
console.log(getUser1());

// Tarea
// 1. Transformar a una funcion Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUserActive(name) {
  return {
    uid: "CBA321",
    username: name,
  };
}

const userActive = getUserActive("Florencia");
console.log(userActive);

// Solucion

const getUserTest = (name) => ({
  uid: "ABC567",
  username: name,
});

const userTest = getUserTest('Florencia')
console.log(userTest)
