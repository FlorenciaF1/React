
const apiKey = 'dsuC7mcwkN6nDJ4xDgQBSkKcatmSbHUe';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// promesas en cadena
// el resultado de la promesa, pasa al siguiente .then()
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch ( console.warm );