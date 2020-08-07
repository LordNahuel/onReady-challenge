const Car = require("./models/Car");
const Motorbike = require("./models/Motorbike");
const BussinessService = require("./services/BussinessService");

class Main {
    service = null;

    constructor() {
        this.service = new BussinessService();

        this.loadData();
        this.show();
    }

    // load all data into a storage on BussinessService.
    loadData() {
        const vehicle1 = new Car('Peugeot', '206', 200000, 4);
        const vehicle2 = new Car('Peugeot', '208', 250000, 5);
        const vehicle3 = new Motorbike('Honda', 'Titan', 60000, '125c'); 
        const vehicle4 = new Motorbike('Yamah', 'YBR', 80500.50, '160C');

        this.service.add(vehicle1);
        this.service.add(vehicle2);
        this.service.add(vehicle3);
        this.service.add(vehicle4);
    }

    show() {
        console.log("-------------------  Welcome to onReady Challenge ----------------------");
        console.log("");
        console.log("=======================================================================>");

        this.service.getAll();
        console.log("=======================================================================>");
    }
}

new Main();