class ReviewItem extends HTMLElement {
    set review(value) {
        this._review = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="mv-user-review-item">
                <h3>${this._review.author}</h3>
                <p>${this._review.content}</p>
            </div>
        `;
    }
  
}
  
customElements.define("review-item", ReviewItem);