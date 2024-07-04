
// Desestructuración o
// Asignación desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, clave, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const destructuring = ({ clave, nombre, edad, rango = "Capitán" }) => {
//   console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

const { nombreClave, años, latlng:{lat, lng} } = destructuring(persona);

console.log(nombreClave, años);
console.log(lat, lng);
