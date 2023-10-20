"use strict"

const roomArea = 200; 

// Define the number of tiles per box
const tilesPerBox = 12;

// Calculate the number of tiles needed without extra
const tilesNeeded = roomArea;

const tilesWithExtra = tilesNeeded * 1.1; 

const boxesNeeded = Math.ceil(tilesWithExtra / tilesPerBox);

console.log(`You need to buy ${boxesNeeded} boxes of tiles.`);
