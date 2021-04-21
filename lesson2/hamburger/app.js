'use strict';


class Hamburger {
    constructor() {
        this.totalPrice = 0;
        this.totalCalories = 0;
    }

    increaseFields(price, calories) {
        this.totalCalories += calories;
        this.totalPrice += price;

    }

    getSize() {
            let hamburgerSize = document.querySelector('input[name="size"]:checked');
            if (hamburgerSize !== null) {
                this.increaseFields(+hamburgerSize.dataset.price, +hamburgerSize.dataset.calories);
            }
        } // Узнать размер гамбургера 
    getStuffing() {
            let hamburgerStuffing = document.querySelectorAll('input[name="stuffing"]:checked');
            for (let i = 0; i < hamburgerStuffing.length; i++) {
                this.increaseFields(+hamburgerStuffing[i].dataset.price, +hamburgerStuffing[i].dataset.calories);
            }
        } // Узнать начинку гамбургера 

    getTopping() {
            let hamburgerTopping = document.querySelectorAll('input[name="topping"]:checked');
            for (let i = 0; i < hamburgerTopping.length; i++) {
                this.increaseFields(+hamburgerTopping[i].dataset.price, +hamburgerTopping[i].dataset.calories);
            }
        } // Узнать топпинг гамбургера


}


document.querySelector('#reset').addEventListener('click', function() {
    let resultPrice = document.querySelector('.totalPrice');
    resultPrice.textContent = `Total price: 0`;
    let resultCalories = document.querySelector('.totalCalories');
    resultCalories.textContent = `Total calories: 0`;
})

document.querySelector('#make').addEventListener('click', function() {
    let newHamburger = new Hamburger();
    newHamburger.getSize();
    newHamburger.getStuffing();
    newHamburger.getTopping();
    let resultPrice = document.querySelector('.totalPrice');
    resultPrice.textContent = `Total price: ${newHamburger.totalPrice}`;
    let resultCalories = document.querySelector('.totalCalories');
    resultCalories.textContent = `Total calories: ${newHamburger.totalCalories}`;
});