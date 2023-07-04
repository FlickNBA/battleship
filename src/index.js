import "./reset.css";
import "./index.css";

import { Player } from "./Player";
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

let xD = new Gameboard(5);

let Flick = new Player("Flick");

console.log(xD.placeShip("1-1", 5, Flick));
console.log(xD.placeShip("5-2", 4, Flick));
// console.log(xD.placeShip("2-3", 3, Krzys));
// // console.log(xD.checkIfCanPlaceShip("1-3", 3));
// // console.log(xD.checkIfCanPlaceShip("2-3", 3));
// // console.log(xD.checkIfCanPlaceShip("2-3", 4));
// console.log(xD.placeShip("4-4", 2, Krzys));
// console.log(xD.checkIfCanPlaceShip("4-4", 2));
// xD.placeShip("4-4", 2, Krzys);
// console.log(xD);
// console.log(Krzys);
// console.log(Krzys.shipCount);
console.log(xD);
