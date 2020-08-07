class Vehicle {
    name = ''; 
    model = ''; 
    price = 0.00; 

    constructor(name, model, price) {
        this.name = name; 
        this.model = model; 
        this.price = price; 
    }

    getName() {
        return this.name;
    }

    getModel() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }

    get priceFormatted() {
        return this.price.toLocaleString("es-AR", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    } 
}   

module.exports = Vehicle;