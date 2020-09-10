class MovieNoData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    clearItems() {
        this.innerHTML = '';
    }
        
    render() {
        this.innerHTML = `
            <div class="landing-hero">
                <div class="row landing-hero-text">
                    <h1>Movie not found. Please use different term.</h1>
                </div>
            </div>
        `;
    }
}
    
   customElements.define("movie-nodata", MovieNoData);