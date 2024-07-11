
import heroes, {owners} from '../data/heroes.js';

// console.log( heroes );
// console.log( owners );

// el .find() recibe una funcion como argumento llamada callback

// Tarea
// Devolver al heroe que querramos segun su id

// Mejor solucion, dejo dos alternativas abajo de todo:
export const getHeroById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id);
}

// console.log ( getHeroById(3) );

// Tarea
// Devolver todos los heroes que tengan DC de owner
export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

// console.log ( getHeroesByOwner('DC') );

// Solucion mas larga:
// const getHeroById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// Solucion mas corta:
// const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id);