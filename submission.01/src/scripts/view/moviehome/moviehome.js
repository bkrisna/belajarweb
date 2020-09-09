import "./popmovielist.js";

class MovieHome extends HTMLElement {
    set movies(values) {
        this._movies = values;
        this.render();
    }

    set detailAction(values) {
        this._detailAction = values;
        this.render();
    }

    _createEl(...clases) {
        const el = document.createElement('div');
        clases.forEach(cls => {
            el.classList.add(cls);
        });
        return el;
    } 

    renderError(value) {
        alert(value);
    }

    clearItems() {
        this.innerHTML='';
    }

    render() {
        this.clearItems();
        
        const popMovieList = document.createElement('popmovie-list');
        popMovieList.movies = this._movies;
        
        this.appendChild(popMovieList);
    }
}

customElements.define("movie-home", MovieHome);