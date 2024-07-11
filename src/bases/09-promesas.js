import {getHeroById} from "./bases/08-imp-exp";

// las promesas son asíncronas
// se ejecutan sus resultados una vez que se termina de compilar todo lo síncrono

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// } )
// .catch ( err => console.warn(err))

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
            setTimeout(() => {
                const heroe = getHeroById(id);
                if ( heroe ) {
                    resolve( heroe );
                } else {
                reject('Ese heroe no existe')
                }
            }, 2000)
        });
}

getHeroeByIdAsync(10)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err));
    // .then( console.log )
    // .catch( console.warn );
