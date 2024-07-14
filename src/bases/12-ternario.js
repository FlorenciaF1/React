
const activo = true;

// forma larga de hacer lo mismo
// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// operador ternario
// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';

// forma corta de hacer un if si la condición es false
const mensaje = !activo && 'Activo';

console.log(mensaje);

