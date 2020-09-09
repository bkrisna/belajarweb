import '../view/moviesearch/movielist.js';
import '../view/searchbar.js';
import '../view/moviedetail/moviedetail.js';
import '../view/moviehome/moviehome.js';
import TmdbApi from '../model/themoviedbapi.js';

function main() {
	const mainContainer = document.getElementById("main-container");
	const searchElement = document.querySelector("search-bar");
	const movieHome = document.querySelector("movie-home");
	const movieListElement = document.querySelector("movie-list");
	const movieDetailElement = document.querySelector("movie-detail");

	const onButtonSearchClicked = async () => {
		try {
			const result = await TmdbApi.searchMovie(searchElement.value);
			renderResult(result);
		} catch (message) {
			fallbackResult(message);
		}
	};

	const onDetailAction = async (movieid) => {
		try {
			const movie = await TmdbApi.getMovieDetail(movieid);
			renderMovieDetail(movie);
		} catch (msg) {
			fallbackResult(msg);
		}
	};

	const onHomeLoad = async () => {
		try {
			const movie = await TmdbApi.getPopMovie();
			renderPopMovies(movie);
		} catch (msg) {
			fallbackResult(msg);
		}
	}

	const renderResult = results => {
		movieDetailElement.clearItems()
		movieListElement.movies = results;
		movieListElement.detailAction = onDetailAction;
	};
  
	const renderMovieDetail = movie => {
		//movieListElement.style.visibility = "hidden";
		//movieDetailElement.style.visibility = "visible";
		movieListElement.clearItems();
		movieDetailElement.movie = movie;
	};

	const renderPopMovies = (movies) => {
		movieListElement.clearItems();
		movieDetailElement.clearItems();
		movieHome.movies = movies;
	};

	const fallbackResult = message => {
		//movieListElement.renderError(message);
		alert (message);
	};

	searchElement.clickEvent = onButtonSearchClicked;
	onHomeLoad();
}

export default main;