// Given data
const numberOfPeople = 50; 
const passengersPerVan = 15;
const costPerVanPerDay = 250; 

// Calculate the number of vans required
const numberOfVans = Math.ceil(numberOfPeople / passengersPerVan);

// Calculate the total cost to rent the vans
const totalCostToRentVans = numberOfVans * costPerVanPerDay;

// Calculate the cost per person
const costPerPerson = totalCostToRentVans / numberOfPeople;

console.log(`You need ${numberOfVans} vans for the tour.`);
console.log(`The total cost to rent the vans is $${totalCostToRentVans}.`);
console.log(`The cost per person is $${costPerPerson.toFixed(2)}.`);
