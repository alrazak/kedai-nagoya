import './drink-item.js';

class DrinkList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
   
    render() {
        this.shadowDOM.innerHTML = '';
        this._drink.forEach(drink => {
          const drinkItemElement = document.createElement('drink-item');
          drinkItemElement.drink = drink;
          
          this.shadowDOM.appendChild(drinkItemElement);
        });
    }
}

customElements.define('drink-list', DrinkList);