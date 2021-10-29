//Movies

export function getMovies() {
  let url = "https://backend-database-movie-entity.herokuapp.com/api/movies";
  let meta = {
    method: "GET",
  };

  return makeRequest(url, "", meta);
}

//shows

export function getMovieShows(id) {
  let url = `https://backend-database-movie-entity.herokuapp.com/api/movies/${id}/shows`;

  let meta = {
    method: "GET",
  };

  return makeRequest(url, "", meta);
}


export function addNewMovie(data) {
  const url = "https://backend-database-movie-entity.herokuapp.com/api/movies";
  const meta = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return makeRequest(url,"", meta);
  
}



export function addNewShows(data,id) {
  const url = `https://backend-database-movie-entity.herokuapp.com/api/shows/${id}`;
  const meta = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return makeRequest(url,"", meta);
  
}


export function deleteMovie(id) {
  let url = `https://backend-database-movie-entity.herokuapp.com/api/movies/${id}`;
  let meta = {
    method: "DELETE",
  };

  return makeRequest(url, "", meta);
}


export function deleteShows(id) {
  let url = `https://backend-database-movie-entity.herokuapp.com/api/shows/${id}`;
  let meta = {
    method: "DELETE",
  };

  return makeRequestDelete(url, "", meta);
}


export function updateMovie(data,id) {
  let url = `https://backend-database-movie-entity.herokuapp.com/api/movies/${id}`;
  let meta = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return makeRequest(url,"", meta);
}



export function updateShows(data,id) {
  let url = `https://backend-database-movie-entity.herokuapp.com/api/shows/${id}`;
  let meta = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return makeRequest(url,"", meta);
}



function makeRequestDelete(url, queryParams, meta) {
  url += `${queryParams}`;
  return fetch(url, meta)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      return parseInt(data.id);
    })
    .catch((err) => {
      console.error(err);
    });
}



function makeRequest(url, queryParams, meta) {
  url += `${queryParams}`;
  return fetch(url, meta)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}
