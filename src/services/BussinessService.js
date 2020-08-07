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
}

module.exports = BussinessService;