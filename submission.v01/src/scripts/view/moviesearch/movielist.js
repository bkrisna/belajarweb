import "./movieitem.js"

class MovieList extends HTMLElement {
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
        this.innerHTML = '';
        
        const movCon = this._createEl("flex-wrap-movielist", "mv-grid-fw");
        this._movies.forEach(movie => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie = movie;
            movieItem.clickEvent = this._detailAction;
        
            movCon.appendChild(movieItem);
        });
        
        const wrap = this._createEl("flex-wrap-movielist", "mv-grid-fw");
        wrap.appendChild(movCon);

        const col1 = this._createEl("col-md-12", "col-sm-12", "col-xs-12");
        col1.appendChild(wrap);

        const rw = this._createEl("row");
        rw.appendChild(col1);

        const con = this._createEl("container");
        con.appendChild(rw);

        const page = this._createEl("page-single");
        page.appendChild(con);

        this.appendChild(page);
    }
}

customElements.define("movie-list", MovieList);