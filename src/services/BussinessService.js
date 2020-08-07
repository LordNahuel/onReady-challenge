class BussinessService {
    storage = []; 

    constructor() {
        // ...
    }

    add(vehicle) {
        this.storage.push(vehicle);
    }

    getAll() {
        for (const vehicle of this.storage) {
            console.log(vehicle.toString());
        }
    }

    getMostExpensive() {
        return this.storage.reduce((prev, current) => {
            return (prev.price > current.price) ? prev : current;  
        });
    }

    getCheapest() {
        return this.storage.reduce((prev, current) => {
            return (prev.price > current.price) ? current : prev;  
        });
    }

    findByLetter(key = 'name', letter = '') {
        return this.storage.find((vehicle) => {
            return vehicle[key] && vehicle[key].includes(letter);
        });
    }
}

module.exports = BussinessService;