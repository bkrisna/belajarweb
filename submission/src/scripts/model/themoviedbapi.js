import Movie from "./movie.js";

class TmdbApi {

    static get SMALL_POSTER () {
        return "w154";
    }

    static get MEDIUM_POSTER() {
        return 'w185';
    }

    static get BIG_POSTER () {
        return "w342";
    }

    static get SMALL_FOTO () {
        return "w45";
    }

    static get DEFAULT_URL () {
        return "../src/images/";
    }

    static get DEFAULT_POSTER() {
        return "default_poster.jpg";
    }

    static get IMG_URL () {
        return "http://image.tmdb.org/t/p/";
    }

    static _prepApi() {
        this._apiUrl = "https://api.themoviedb.org/3";
        this._apiKey = "7832c13e5bb1f7898f616899243e26e6";
    }

    static ApiCall(act, exparam = false) {
        this._prepApi();
        let qstring = `${this._apiUrl}/${act}?api_key=${this._apiKey}`;
        qstring += (exparam) ? `&query=${exparam}` : '';
        return fetch(qstring)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.success == false) {
                return Promise.reject(responseJson.status_message);
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static getPicPath(img, img_size) {
        const img_url = (img) ? TmdbApi.IMG_URL : TmdbApi.DEFAULT_URL;
        const image = (img) ? img : TmdbApi.DEFAULT_POSTER;
        return `${img_url}${img_size}/${image}`;
    }

    static async getMovieDetail(movieid) {
        const detailAct = `movie/${movieid}`;
        const cncAct = `movie/${movieid}/credits`;
        const reviewAct = `movie/${movieid}/reviews`;
        try {
            const mov = new Movie();
            
            mov.movieData = await TmdbApi.ApiCall(detailAct);
            
            const rev = await TmdbApi.ApiCall(reviewAct);
            mov.reviews = rev.results;

            const cnc = await TmdbApi.ApiCall(cncAct);
            mov.casts = cnc.cast;
            mov.crews = cnc.crew;

            return Promise.resolve(mov);
        } catch (msg) {
            return Promise.reject(msg);   
        }
    }

    static async searchMovie(value) {
        const act = 'search/movie'
        const query = value;
        const queryRes = [];

        try {
            const res = await TmdbApi.ApiCall(act, query);
            res.results.forEach(res => {
                const tmp = {
                    id : res.id,
                    title : res.title,
                    vote_average: res.vote_average,
                    posterpath: res.poster_path
                }
                queryRes.push(tmp);
            })
            return Promise.resolve(queryRes);
		} catch (message) {
			return Promise.reject(message);
		}
    }

    static async getPopMovie() {
        const act = 'movie/popular'
        const queryRes = [];

        try {
            const res = await TmdbApi.ApiCall(act);
            res.results.forEach(res => {
                const tmp = {
                    id : res.id,
                    title : res.title,
                    rating: res.vote_average,
                    posterpath: res.poster_path,
                    releasedate: res.release_date,
                    genres: res.genres
                }
                queryRes.push(tmp);
            })
            return Promise.resolve(queryRes);
		} catch (message) {
			return Promise.reject(message);
		}
    }
}

export default TmdbApi;