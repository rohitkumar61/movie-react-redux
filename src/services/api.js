  export function getMovies() {
	let url = "https://backend-database-movie-entity.herokuapp.com/api/movies";
	let meta = {
	  method: "GET",
	};
  
	return makeRequest(url, "", meta);
  }
  

function makeRequest(url, queryParams, meta) {
	url += `${queryParams}`;
	return fetch(url, meta)
	  .then((response) => {
		return response.json();
	  })
	  .then((data) => {
		return data;
	  })
	  .catch((err) => {
		console.error(err);
	  });
  }