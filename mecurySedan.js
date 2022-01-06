//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        super.numberOfWheels = 4;
        super.passenger = 0;
        super.make = ""

        this.maximumPassengers = 6;      
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.maintenance  = false;

        this.availableRoom = false;
        
    }
    //num	if passenger less than maximumPassengers availableRoom == true
    loadPassenger() {
        if(super.passenger < this.maximumPassengers){
            this.availableRoom = true;
        }
    }
    //no parameters	if fuel is greater than 0, then start == true	
    start() {
        super.start();
    }
    //mileage	if mileage is greater than 30000, time for maintenance == true	
    scheduleService() {
        if(this.mileage > 30000) {
            this.maintenance  = true;            
        }
        return this.maintenance;
    }
}