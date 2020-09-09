class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
        
    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="index.html">#MyMovieCatalogue</a>
            </nav>
        `;
    }
}
    
   customElements.define("header-bar", HeaderBar);