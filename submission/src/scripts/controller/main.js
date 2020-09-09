import '../view/searchbar.js';
import '../view/movielanding.js';
import '../view/movienodata.js';
import '../view/moviesearch/movielist.js';
import '../view/moviedetail/moviedetail.js';
import TmdbApi from '../model/themoviedbapi.js';

function main() {
	const searchElement = document.querySelector("search-bar");
	const landingElement = document.querySelector("movie-landing");
	const movieListElement = document.querySelector("movie-list");
	const movieDetailElement = document.querySelector("movie-detail");
	const movienodata = document.querySelector("movie-nodata");

	const onButtonSearchClicked = async () => {
		const val = searchElement.value;
		if (val && val.trim()) {
			try {
				const result = await TmdbApi.searchMovie(searchElement.value);
				if (result.length) {
					renderResult(result);
				} else {
					renderNoData();
				}
			} catch (message) {
				fallbackResult(message);
			}
		} else {
			renderLanding();
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

	const renderResult = results => {
		movieDetailElement.clearItems();
		landingElement.clearItems();
		movieListElement.movies = results;
		movieListElement.detailAction = onDetailAction;
	};

	const renderMovieDetail = movie => {
		movieListElement.clearItems();
		landingElement.clearItems();
		movieDetailElement.movie = movie;
	};

	const renderNoData = () => {
		movieDetailElement.clearItems();
		movieListElement.clearItems();
		landingElement.clearItems();
		movienodata.render();
	}

	const renderLanding = () => {
		movieListElement.clearItems();
		movieDetailElement.clearItems();
		movienodata.clearItems();
		landingElement.render();
	}

	const fallbackResult = message => {
		alert (message);
	};

	searchElement.clickEvent = onButtonSearchClicked;
	renderLanding();
}

export default main;