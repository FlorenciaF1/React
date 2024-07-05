
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3  ] = personajes;
// con F2 cambio todos los nombres de una sola vez
console.log( p3 )

const retornoArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros] = retornoArreglo();
console.log( letras, numeros );

//Tarea
// 1. el primero valor del arr se llamará nombre
// 2. el segundo se llamará setNombre
const state = ( valor ) => {
    return [ valor , ( ) => {console.log('Hola mundo') } ];
}

const [ nombre, setNombre] = state('Goku');


console.log( nombre );
setNombre();
// arr[1]();


