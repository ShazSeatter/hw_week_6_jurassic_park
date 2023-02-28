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
}

Park.prototype.dinasourWithMostVisitors = function() {
    const max = Math.max.apply(null, this.dinosaurs);
    return max
// var num = [4,5,1,3];
// console.log(Math.max.apply(null, num)); // logs 5



}
module.exports = Park; 