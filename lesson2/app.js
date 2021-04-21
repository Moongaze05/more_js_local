'use strict';



// // пустой класс для элемента корзины товаров
// class ProductElement {
//     constructor() {}

//     deleteProduct() {}
//     addToFavouritesProduct() {}
// }

// // пустой класс для корзины товаров

// class ProductCart {
//     constructor() {}

//     makePayment() {}
//     deleteAllProducts()

// }

// Что то в этом роде, не совсем понял задание


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this._goods = []; // any data;
        this._allProducts = []; // экземпляры;

        this._fetchGoods();
        this._render();
        this.productSum();
    }

    // не понял, зачем мы записываем методы в конструктор?

    _fetchGoods() {
        this._goods = [
            { id: 1, title: 'Notebook', price: 28000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    _render() {
        let block = document.querySelector(this.container);

        for (let product of this._goods) {
            let productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }

    /**
     * @param {}
     */

    productSum() {
        let priceSum = 0;
        for (let productPrices of this._goods) {
            let productPrice = productPrices.price;
            priceSum += productPrice;
        }
        console.log(priceSum);

    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class='product-item'>
                    <img src = '${this.img}' alt = 'img'>
                    <div class='desc'>
                        <h3>${this.title}</h3>
                        <p>${this.price}</p>
                        <button class='buy-btn'>Добавить в корзину</button>
                    </div>
                </div>`;
    }
}

new ProductList();