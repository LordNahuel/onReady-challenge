const Vehicle = require("./Vehicle");

class Motorbike extends Vehicle {
    size = ''; 

    constructor(name, model, price, size) {
        super(name, model, price);
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    toString() {
        return `Marca: ${this.name} // Modelo: ${this.model} // Cilindrada: ${this.size} // Precio ${super.priceFormatted}`;
    }
}

module.exports = Motorbike;