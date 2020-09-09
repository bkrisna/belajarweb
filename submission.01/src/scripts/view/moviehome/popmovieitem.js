import TmdbApi from "../../model/themoviedbapi.js";

class PopMovieItem extends HTMLElement {
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

    _createCategory(cats) {
        const col = ['.blue', '.yell', '.green', '.orange'];
        let categories = '';
        if (Array.isArray(cats) && cats.length) {
            cats.forEach(cat => {
                const color = col[(parseInt(cat.id) % 4)];
                categories += `<span class="${color}"><a href="#">${cat.name}</a></span>`;
            });
        }
        return categories;
    }

    _clearItem() {
        this.innerHTML = '';
    }

    render() {
        this._clearItem();
        
        const categoryPanel = this._createEl('cate');
        categoryPanel.innerHTML = this._createCategory(this._movie.categories);
        
        const titleAnchor = document.createElement('a');
        titleAnchor.setAttribute('href', '#')
        titleAnchor.innerHTML = `${this._movie.title} <span>${this._movie.releasedate.split("-")[0]}</span>`;
        const titlePanel = document.createElement('h1');
        titlePanel.appendChild(titleAnchor);
        
        const ratingPanel = document.createElement('p');
        ratingPanel.innerHTML = `<i class="fas fa-star"></i><span>${this._movie.rating}</span>`;

        /*const runtime = document.createElement('li');
        runtime.innerHTML = `Run Time: ${this._movie.runtime}`;*/

        const releaseDate = document.createElement('li');
        releaseDate.innerHTML = `Release: ${this._movie.releasedate}`;

        const movieInfo = document.createElement('ul');
        //movieInfo.appendChild(runtime);
        movieInfo.appendChild(releaseDate);

        const detailPanel = this._createEl('mv-details');
        detailPanel.appendChild(ratingPanel);
        detailPanel.appendChild(movieInfo);

        const anchorDetail1 = document.createElement('a');
        anchorDetail1.setAttribute('href', '#');
        anchorDetail1.classList.add('item');
        anchorDetail1.classList.add('item-1');
        anchorDetail1.classList.add('redbtn');
        anchorDetail1.innerHTML = 'more detail';
        const inBtnPanel1 = document.createElement('div');
        inBtnPanel1.appendChild(anchorDetail1);

        const anchorDetail2 = document.createElement('a');
        anchorDetail2.setAttribute('href', '#');
        anchorDetail2.classList.add('item');
        anchorDetail2.classList.add('item-2');
        anchorDetail2.classList.add('redbtn');
        anchorDetail2.classList.add('hvrbtn');
        anchorDetail2.innerHTML = 'more detail';
        const inBtnPanel2 = document.createElement('div');
        inBtnPanel2.appendChild(anchorDetail2);

        const buttonPanel = this._createEl('btn-transform', 'transform-vertical');
        buttonPanel.appendChild(inBtnPanel1);
        buttonPanel.appendChild(inBtnPanel2);

        const titleContainer = this._createEl('title-in');
        titleContainer.appendChild(categoryPanel);
        titleContainer.appendChild(titlePanel);
        titleContainer.appendChild(detailPanel);
        titleContainer.appendChild(buttonPanel);

        const col1 = this._createEl('col-md-8', 'col-sm-12', 'col-xs-12');
        col1.appendChild(titleContainer);

        const poster = document.createElement('img');
        poster.setAttribute('src', TmdbApi.getPicPath(this._movie.posterpath, TmdbApi.MEDIUM_POSTER));

        const posterAnchor = document.createElement('a');
        posterAnchor.setAttribute('href', '#');
        posterAnchor.appendChild(poster);

        const posterContainer = this._createEl('mv-img-2');
        posterContainer.appendChild(posterAnchor);

        const col2 = this._createEl('col-md-4', 'col-sm-12', 'col-xs-12');
        col2.appendChild(posterContainer);
        

        const itmRow = this._createEl('row');
        itmRow.appendChild(col1);
        itmRow.appendChild(col2);

        const itmContainer = this._createEl('movie-item');
        itmContainer.appendChild(itmRow);

        this.appendChild(itmContainer);
    }
  
}
  
customElements.define("popmovie-item", PopMovieItem);