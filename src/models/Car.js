const Vehicle = require("./Vehicle");

class Car extends Vehicle {
    doors = 3; 

    constructor(name, model, price, doors) {
        super(name, model, price);
        this.doors = doors; 
    }

    getDoors() {
        return this.doors;
    }

    toString() {
        return `Marca: ${this.name} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio ${super.priceFormatted}`;
    }
}

module.exports = Car; 