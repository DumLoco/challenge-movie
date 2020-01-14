const fetchPoster = props => {
  let apiKey = "fec0f00e";
  let urlPoster = `http://img.omdbapi.com/?apikey=${apiKey}&`;
  let datosPelicula = {
    nombre: null,
    year: null
  };
  fetch(`${url}s=${props.busqueda}`)
    .then(response => response.json())
    .then(resp => {
      datosPelicula.nombre = resp.title;
      datosPelicula.year = resp.year;
    });
};

export default fetchPoster;
