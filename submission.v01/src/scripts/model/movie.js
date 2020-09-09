class Movie {

    constructor() {
        this._moviedata = null;
        this._casts = [];
        this._crews = [];
        this._reviews = [];
    }

    set movieData(value) {
        this._moviedata = value;
    }

    set casts(value) {
        this._casts = value;
    }

    set crews(value) {
        this._crews = value;
    }

    set reviews(value) {
        this._reviews = value;
    }

    get movieid() {
        return this._moviedata.id;
    }

    get title() {
        return this._moviedata.title;
    }

    get overview() {
        return this._moviedata.overview;
    }

    get releaseDate() {
        return this._moviedata.release_date;
    }

    get year() {
        const rdate = this._moviedata.release_date.split("-");
        return rdate[0];
    }

    get runtime() {
        return this._moviedata.runtime;
    }

    get stars() {
        return this._moviedata.vote_average;
    }

    get directors() {
        let director = [];
        if (Array.isArray(this._crews) && this._crews.length) {
            this._crews.forEach(crew => {
                if (crew.job == 'Director') {
                    director.push(crew);
                }
            });
        }
        return director;
    }

    get writers() {
        let writers = [];
        if (Array.isArray(this._crews) && this._crews.length) {
            this._crews.forEach(crew => {
                if (crew.department == 'Writing') {
                    writers.push(crew);
                }
            });
        }
        return writers;
    }

    get casts() {
        return this._casts;
    }

    get genres() {
        return this._moviedata.genres;
    }

    get reviews() {
        return this._reviews;
    }

    get posterpath() {
        return this._moviedata.poster_path;
    }
    
}

export default Movie;