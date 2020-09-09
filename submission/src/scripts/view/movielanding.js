class MovieLanding extends HTMLElement {
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
                    <h2>MOST COMPLETED</h2>
                    <h2 class="text-yellow">FILM REVIEW  &middot;  MOVIE DATABASE</h2>
                </div>
            </div>
        `;
    }
}
    
   customElements.define("movie-landing", MovieLanding);