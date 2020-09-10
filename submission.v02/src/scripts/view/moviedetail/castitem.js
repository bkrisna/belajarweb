import TmdbApi from "../../model/themoviedbapi.js";

class CastItem extends HTMLElement {
    set cast(value) {
        this._cast = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="cast-it">
                <div class="cast-left">
                    <img src="${TmdbApi.getPicPath(this._cast.profile_path, TmdbApi.SMALL_FOTO)}" alt="">
                    <a href="#">${this._cast.name}</a>
                </div>
                <p>${this._cast.character}</p>
            </div>
        `;
    }
  
}
  
customElements.define("cast-item", CastItem);