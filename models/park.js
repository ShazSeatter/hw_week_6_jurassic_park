const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice; 
    this.dinosaurs = [];
};

Park.prototype.addDinosaurs = function (dinasour) {
    this.dinosaurs.push(dinasour);
};


Park.prototype.removeDinasours = function (dinasour) {
    const indexOfDinasours = this.dinosaurs.indexOf(dinasour);
    this.dinosaurs.splice(indexOfDinasours, 1);
}; 

Park.prototype.dinasourWithMostVisitors = function() {







}
module.exports = Park; 