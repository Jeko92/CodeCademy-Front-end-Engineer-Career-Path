const tmdbKey = "<API key";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  //   console.log(`URLToFetch: ${urlToFetch}`);

  try {
    const response = await fetch(urlToFetch);
    // console.log(response);
    if (response.ok) {
      //   console.log(response);
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      const genres = jsonResponse.genres;

      return genres;
    }

    throw new Error("Requesst failed!");
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
  //   console.log(`URLToFetch: ${urlToFetch}`);

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      //   console.log(response);
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      //   console.log(jsonResponse.results);
      const movies = jsonResponse.results;

      return movies;
    }
    throw new Error("Requesst failed!");
  } catch (error) {
    console.log(error);
  }
};

// getMovies();

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
  //   console.log(`URLToFetch: ${urlToFetch}`);

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      //   console.log(response);
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      //   console.log(jsonResponse.results);
      const movieInfo = jsonResponse;

      return movieInfo;
    }
    throw new Error("Requesst failed!");
  } catch (error) {
    console.log(error);
  }
};

// Gets alist of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurerntMovie();
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
