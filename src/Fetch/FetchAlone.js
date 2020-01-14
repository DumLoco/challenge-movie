const fetchAlone = peli => {
  let movieObjt = {};
  let apiKey = "fec0f00e";
  let url = `http://www.omdbapi.com/?apikey=${apiKey}&`;
  let busquedaPeli = peli;
  fetch(`${url}t=${busquedaPeli}`)
    .then(response => response.json())
    .then(resp => {
      movieObjt = resp;
      console.log(movieObjt);
      return movieObjt;
    });
  //console.log(movieObjt);
  //return movieObjt;
};

const fetchAlone2 = async peli => {
  await fetchAlone(peli);
};

export default fetchAlone2;
