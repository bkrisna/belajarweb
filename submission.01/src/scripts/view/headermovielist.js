import "./headermovieitem.js"

class HEaderMovieList extends HTMLElement {
    set movies(value) {
      this._movies = value;
      this.render();
    }

    connectedCallback() {
        this.render();
    }
    
    _setHeader() {
        this.innerHTML = ``;
    }

    _setFooter() {
        
    }
    
    render() {
      this._movies.forEach(movie => {
        const movieElement = document.createElement("header-movie-item");
        // memanggil fungsi setter article() pada article-item.
        movieElement.movie = article;
        this.appendChild(movieElement);
      })
    }
   }
    
   customElements.define("header-movie-list", HEaderMovieList);