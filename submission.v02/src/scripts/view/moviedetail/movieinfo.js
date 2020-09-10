class MovieInfo extends HTMLElement {
    set movie(value) {
        this._movie = value;
        this.render();
    }

    _getWriters() {
        let writers = '';
        this._movie.writers.forEach((writer, idx) => {
            writers += (idx >= 0 && idx < (this._movie.writers.length - 1)) ? `<a href="#">${writer.name},</a>&nbsp;`: `<a href="#">${writer.name}</a>`;
        });
        return writers;
    }

    _getDirectors() {
        let dirs = '';
        this._movie.directors.forEach((dir, idx) => {
            dirs += (idx >= 0 && idx < (this._movie.directors.length - 1)) ? `<a href="#">${dir.name},</a>&nbsp;` : `<a href="#">${dir.name}</a>`;
        });
        return dirs;
    }

    _getCasts() {
        let casts = '';
        this._movie.casts.forEach((cast, idx) => {
            if (idx < 10) {
                casts += (idx >= 0 && idx < 9) ? `<a href="#">${cast.name},</a>&nbsp;` : `<a href="#">${cast.name}</a>` ;
            }
        });
        return casts;
    }

    _getGenres() {
        let genres = '';
        this._movie.genres.forEach(genre => {
            genres += `<a href="#">${genre.name},</a>`
        });
        return genres;
    }
        
    render() {
        this.innerHTML = `
            <div class="sb-it">
                <h6>Director: </h6>
                <p><a href="#">${this._getDirectors()}</a></p>
            </div>
            <div class="sb-it">
                <h6>Writer: </h6>
                <p><a href="#">${this._getWriters()}</p>
            </div>
            <div class="sb-it">
                <h6>Stars: </h6>
                <p><a href="#">${this._getCasts()}</p>
            </div>
            <div class="sb-it">
                <h6>Genres:</h6>
                <p>${this._getGenres()}</p>
            </div>
            <div class="sb-it">
                <h6>Release Date:</h6>
                <p>${this._movie.releaseDate}</p>
            </div>
            <div class="sb-it">
                <h6>Run Time:</h6>
                <p>${this._movie.runtime} min</p>
            </div>
        `;
    }
  
}
  
customElements.define("movie-info", MovieInfo);