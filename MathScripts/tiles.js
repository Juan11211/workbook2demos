// Define the room area in square feet
const roomArea = 200; // Change this to the actual area of your room

// Define the number of tiles per box
const tilesPerBox = 12;

// Calculate the number of tiles needed without extra
const tilesNeeded = roomArea;

// Calculate the number of tiles needed with 10% extra
const tilesWithExtra = tilesNeeded * 1.1; // 10% extra is represented as 1.1

// Calculate the number of boxes needed (rounding up to the nearest whole number)
const boxesNeeded = Math.ceil(tilesWithExtra / tilesPerBox);

console.log(`You need to buy ${boxesNeeded} boxes of tiles.`);
