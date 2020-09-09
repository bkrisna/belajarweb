class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#searchElement").value;
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

        const se = document.createElement('input');
        se.setAttribute('placeholder', "enter your movie title here");
        se.setAttribute('id', "searchElement");
        se.setAttribute('type', 'search');

        const btn = document.createElement('button');
        btn.setAttribute('id', 'searchButtonElement');
        btn.setAttribute('type', 'submit');
        btn.innerHTML = '<i class="fas fa-search"></i>';
        btn.addEventListener("click", this._clickEvent);

        const seContainer = this._createEl('search-container');
        seContainer.setAttribute('id','search-container');
        seContainer.appendChild(se);
        seContainer.appendChild(btn);

        const rowContainer = this._createEl('search-row');
        rowContainer.appendChild(seContainer);

        this.appendChild(rowContainer);
    }
}
    
customElements.define("search-bar", SearchBar);