import "./castitem.js"

class CastList extends HTMLElement {
    set casts(values) {
      this._casts = values;
      this.render();
    }

    _createEl(...clases) {
        const el = document.createElement('div');
        clases.forEach(cls => {
            el.classList.add(cls);
        });
        return el;
    }

    _createTitleElement() {
        const title = this._createEl('title-hd-sm');
        title.innerHTML = `
            <h4>Cast</h4>
        `;
        return title;
    }

    _craeteContainerElement() {
        const el = this._createEl('mvcast-item');
        return el;
    }

    render() {
        this.innerHTML = '';
        const castListTitle = this._createTitleElement();
        const castListContainer = this._craeteContainerElement();
        
        this._casts.forEach((cast, idx) => {
            if (idx <= 10) {
                const castItem = document.createElement("cast-item");
                castItem.cast = cast;
                castListContainer.appendChild(castItem);
            }
        })

        this.appendChild(castListTitle);
        this.appendChild(castListContainer);
    }
   }
    
   customElements.define("cast-list", CastList);