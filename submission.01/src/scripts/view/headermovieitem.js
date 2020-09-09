class HeaderMOvieItem extends HTMLElement {
  set movie(value) {
    this._movie = value;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
      
  render() {
    this.innerHTML = `
      <div class="movie-item">
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
              <div class="title-in">
                  <div class="cate">
                      <span class="blue"><a href="#">Sci-fi</a></span>
                      <span class="yell"><a href="#">Action</a></span>
                      <span class="orange"><a href="#">advanture</a></span>
                  </div>
                  <h1><a href="#">${this._movie.title}<span>${this._movie.year}</span></a></h1>
                  <div class="mv-details">
                      <p><i class="fas fa-star"></i><span>${this._movie.rating}</span> /10</p>
                      <ul class="mv-infor">
                          <li>  Run Time: ${this._movie.rutime} </li>
                          <li>  Rated: ${this._movie.rating}  </li>
                          <li>  Release: ${this._movie.releasedate}</li>
                      </ul>
                  </div>
                  <div class="btn-transform transform-vertical">
                      <div><a href="#" class="item item-1 redbtn">more detail</a></div>
                      <div><a href= "#" class="item item-2 redbtn hvrbtn">more detail</a></div>
                  </div>		
              </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
              <div class="mv-img-2">
                  <a href="#"><img src="${this._movie.headerposter}" alt=""></a>
              </div>
          </div>
        </div>	
      </div>
    `;
  }

  this.querySelector("#item").addEventListener("click", this._clickEvent);

}


customElements.define("header-movie-item", HeaderMOvieItem);