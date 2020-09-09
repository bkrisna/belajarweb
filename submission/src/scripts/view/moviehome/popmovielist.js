import "./popmovieitem.js";

class PopMovieList extends HTMLElement {
    set movies(values) {
      this._movies = values;
      this.render();
    }

    _createEl(...clases) {
        const el = document.createElement('div');
        clases.forEach(cls => {
            el.classList.add(cls);
        });
        return el;
    }

    clearItems() {
        this.innerHTML = '';
    }

    render() {
        this.clearItems();

        const listPanel = this._createEl('slider-single-item');

        this._movies.forEach((movie, idx) => {
            if (idx <= 10) {
                const movItem = document.createElement("popmovie-item");
                movItem.movie = movie;
                listPanel.appendChild(movItem);
            }
        })


        const r1 = this._createEl('row');
        r1.appendChild(listPanel);

        const container = this._createEl('container');
        container.appendChild(r1);
        
        const mainContainer = this._createEl('slider', 'sliderv2');
        mainContainer.appendChild(container);

        this.appendChild(mainContainer);
    }
   }
    
   customElements.define("popmovie-list", PopMovieList);