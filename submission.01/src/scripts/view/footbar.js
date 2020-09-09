class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
        
    render() {
        this.innerHTML = `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col social_icon">
                        <a href="#"> <i class="fab fa-facebook icon"></i></a>
                        <a href="#"> <i class="fab fa-twitter icon"></i></a>
                        <a href="#"> <i class="fab fa-linkedin icon"></i></a>
                        <a href="#"> <i class="fab fa-tumblr icon"></i></a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col">
                        <p>#bkrisnamurti &#169; 2020 - Dicoding Academy &#169; 2019</p>
                    </div>
                </div>
            </div>
        `;
    }
}
    
   customElements.define("footer-bar", FootBar);