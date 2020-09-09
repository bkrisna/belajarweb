import TmdbApi from "../../model/themoviedbapi.js";

class MovieItem extends HTMLElement {
    set movie(value) {
        this._movie = value;
        this.render();
    }
  
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    _createEl(...clases) {
        const el = document.createElement('div');
        clases.forEach(cls => {
            el.classList.add(cls);
        });
        return el;
    }

    render() {
        this.innerHTML = '';
        const detailButton = document.createElement('a');
        detailButton.setAttribute('href','#');
        detailButton.innerHTML = ' Read more <i class="fas fa-chevron-right"></i> ';
        detailButton.addEventListener("click", () => {
            this._clickEvent(this._movie.id);
        });

        const detailButtonContainer = this._createEl('hvr-inner');
        detailButtonContainer.appendChild(detailButton);

        const movietitle = document.createElement('a');
        movietitle.setAttribute('href', '#');
        movietitle.innerHTML = `${this._movie.title}`;

        const header6 = document.createElement('h6');
        header6.appendChild(movietitle);

        const movieRating = document.createElement('p');
        movieRating.classList.add('rate');
        movieRating.innerHTML = `<i class="fas fa-star"></i><span>${this._movie.vote_average}</span>`;

        const movieInfoContainer =  this._createEl('mv-item-infor');
        movieInfoContainer.appendChild(header6);
        movieInfoContainer.appendChild(movieRating);

        const moviePoster = document.createElement('img');
        moviePoster.setAttribute('src',TmdbApi.getPicPath(this._movie.posterpath, TmdbApi.SMALL_POSTER));
        
        const con = this._createEl('movie-item-style-2', 'movie-item-style-1');
        con.appendChild(moviePoster);
        con.appendChild(detailButtonContainer);
        con.appendChild(movieInfoContainer);

        this.appendChild(con);

    }
  
}
  
customElements.define("movie-item", MovieItem);