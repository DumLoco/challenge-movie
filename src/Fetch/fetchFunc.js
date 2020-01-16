const endPointX = peli => {
  let movieData = [];
  let url = `http://www.omdbapi.com/?apikey=fec0f00e&`;
  let busquedaPeli = peli;
  fetch(`${url}t=${busquedaPeli}`)
    .then(response => response.json())
    .then(resp => (movieData = resp))
    .then(console.log(movieData));
};

let carnofago = endPointX("the matrix");
endPointX("the matrix");
console.log(carnofago);

export default endPointX;
