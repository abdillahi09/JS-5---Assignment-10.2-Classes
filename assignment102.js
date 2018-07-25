var Airplane = /** @class */ (function () {
    function Airplane(name, occupancy, speed) {
        this.name = name;
        this.occupancy = occupancy;
        this.speed = speed;
        if (name == undefined || name == "") {
            console.log("Error!Please enter your name correctly");
        }
        if (occupancy < 1 || occupancy > 180 || occupancy == undefined) {
            console.log("Error!Occupancy can't be 0 or above 180.");
        }
        if (speed == 0 || speed < 0) {
            console.log("Error1!Speed cannot be equal or less than 0 KM/hour.");
        }
        else if (speed >= 901) {
            console.log("Error2!Speed cannot be more than 900 KM/hour.");
        }
        else {
            console.log("Speed is set to " + this.speed + " KM/hour. Good Job!");
        }
    }
    Airplane.prototype.status = function () {
        console.log("Airplane: " + this.name + " with " + this.occupancy + " occupancy, is moving at " + this.speed + " KM/hour.");
    };
    Airplane.prototype.increaseSpeed = function (speedUp) {
        var cumulative = this.speed += speedUp;
        if (cumulative > 0 && cumulative < 900) {
            console.log("Your current speed is " + cumulative + " KM/hour.");
        }
        else if (cumulative > 900) {
            console.log("Requested speed is invalid. Max speed capacity is 900 KM/hour.");
        }
        else {
            console.log("Engine is in idle state. Would you like to turn the ignition?");
        }
    };
    Airplane.prototype.decreaseSpeed = function (speedDown) {
        var reducingSpeed = this.speed -= speedDown;
        if (reducingSpeed <= 0) {
            console.log("Engine is in idle state. Would you like to turn the ignition?");
        }
        else {
            console.log("Your speed is reduced by " + speedDown + " KM/hour. Your current speed is " + reducingSpeed + " KM/hour.");
        }
    };
    return Airplane;
}());
/* initialize a new airplane object. */
var a = new Airplane("Boeing 777", 175, 699);
/* Calls the methods: status, increaseSpeed and decreaseSpeed.*/
a.status();
a.increaseSpeed(200);
a.decreaseSpeed(100);
/* initialize a new airplane object. */
var b = new Airplane("Airbus 203", 165, 500);
/* Calls the methods: status, increaseSpeed and decreaseSpeed.*/
b.status();
b.increaseSpeed(200);
b.decreaseSpeed(300);
/* initialize a new airplane object. */
var c = new Airplane("Bombardier 893", 125, 650);
/* Calls the methods: status, increaseSpeed and decreaseSpeed.*/
c.status();
c.increaseSpeed(200);
c.decreaseSpeed(200);
