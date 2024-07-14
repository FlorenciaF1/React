// Opcion larga
// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('http://ajdskjdkl.com')
//     })
//     return promesa;
// }

// Opcion corta
const getImagenPromesa = () =>
  new Promise((resolve) => resolve("http://ajdskjdkl.com"));

getImagenPromesa().then(console.log);

// Opcion con async
const getImagen = async () => {
  try {
    const apiKey = "dsuC7mcwkN6nDJ4xDgQBSkKcatmSbHUe";
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await respuesta.json();
    
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

  } catch (error) {
    // manejo del error
    console.error(error)
  }
};

getImagen();
