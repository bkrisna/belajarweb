import "./reviewitem.js"

class ReviewList extends HTMLElement {
    set reviews(values) {
      this._reviews = values;
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
            <h4>User reviews</h4>
        `;
        return title;
    }

    render() {
        this.innerHTML = '';
        const riTitle = this._createTitleElement();
        this.appendChild(riTitle);
        this._reviews.forEach((review, idx) => {
            if (idx < 5) {
                const ri = document.createElement("review-item");
                ri.review = review;
                this.appendChild(ri);
            }
        });
    }
   }
    
   customElements.define("review-list", ReviewList);