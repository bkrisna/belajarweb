import "./movieinfo.js";
import "./castlist.js";
import "./reviewlist";
import TmdbApi from "../../model/themoviedbapi.js";

class MovieDetail extends HTMLElement {
    set movie(values) {
        this._movie = values;
        this.render();
    }

    _createEl(...clases) {
        const el = document.createElement('div');
        clases.forEach(cls => {
            el.classList.add(cls);
        });
        return el;
    }

    _createMoviePoster() {
        const el = this._createEl('movie-img');
        el.innerHTML = `<img src="${TmdbApi.getPicPath(this._movie.posterpath, TmdbApi.BIG_POSTER)}" alt="">`;
        return el;
    }

    renderError(value) {
        alert(value);
    }

    clearItems() {
        this.innerHTML = '';
    }

    render() {
        this.clearItems();
        const tabRow1Col1 = this._createEl("col-md-8","col-sm-12","col-xs-12");
        tabRow1Col1.innerHTML = `<p>${this._movie.overview}</p>`;
        const movieReview = document.createElement("review-list");
        movieReview.reviews = this._movie.reviews;
        tabRow1Col1.appendChild(movieReview);
        const movieCast = document.createElement("cast-list");
        movieCast.casts = this._movie.casts;
        tabRow1Col1.appendChild(movieCast);

        const tabRow1Col2 = this._createEl('col-md-4', 'col-xs-12', 'col-sm-12');
        const movieInfo = document.createElement("movie-info");
        movieInfo.movie = this._movie;
        tabRow1Col2.appendChild(movieInfo);
        
        const tabRow1 = this._createEl('row');
        tabRow1.appendChild(tabRow1Col1);
        tabRow1.appendChild(tabRow1Col2);

        const tabOVerview = this._createEl('tab', 'active');
        tabOVerview.setAttribute('id','overview');
        tabOVerview.appendChild(tabRow1);

        const tabContent = this._createEl('tab-content');
        tabContent.appendChild(tabOVerview);

        const tabCon = this._createEl('tabs');
        tabCon.innerHTML = `
            <ul class="tab-links tabs-mv">
                <li class="active"><a href="#overview">Overview</a></li>
            </ul>
        `;
        tabCon.appendChild(tabContent);

        const tabEL = this._createEl('movie-tabs');
        tabEL.appendChild(tabCon);

        const con1 = this._createEl('movie-single-ct', 'main-content');
        con1.innerHTML = `<h1 class="bd-hd">${this._movie.title} <span>${this._movie.year}</span></h1>`;
        con1.appendChild(tabEL);
        
        const col2 = this._createEl('col-md-8', 'col-sm-12', 'col-xs-12');
        col2.appendChild(con1);


        const col1 = this._createEl('col-md-4', 'col-sm-12', 'col-xs-12');
        col1.appendChild(this._createMoviePoster());

        const r1 = this._createEl('row', 'ipad-width2');
        r1.appendChild(col1);
        r1.appendChild(col2);

        
        const c1 = this._createEl('container');
        c1.appendChild(r1);

        const mainContainer = this._createEl('movie-detail', 'page-single', 'movie-single', 'movie_single');
        mainContainer.appendChild(c1);

        this.appendChild(mainContainer);
    }
}
    
   customElements.define("movie-detail", MovieDetail);