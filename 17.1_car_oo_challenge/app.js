class Vehicle {
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        return 'BEEP'
    }
    toString(){
        return `This vehicle is a ${make} ${model} from the year ${year}`
    }
}

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM';
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here"
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}