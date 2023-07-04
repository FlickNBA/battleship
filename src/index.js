import "./reset.css";
import "./index.css";

import { Player } from "./Player";
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { initBoard, updateDOM } from "./initBoard";

// const basicAttackTests = () => {
//   let board = new Gameboard(7);

//   let Flick = new Player("Flick");
//   let Enemy = new Player("Enemy");

//   board.placeShip("1-2", "x", 2, Flick);
//   board.placeShip("7-4", "x", 4, Enemy);
//   board.placeShip("3-4", "x", 2, Flick);
//   board.placeShip("2-1", "y", 4, Enemy);
//   board.placeShip("3-3", "y", 3, Flick);
//   board.placeShip("2-7", "y", 3, Enemy);

//   console.log(board.receiveAttack("1-2", Flick)); // 3 = can't attack your own

//   console.log(board.receiveAttack("6-5", Enemy)); // 2 = miss

//   console.log(board.receiveAttack("7-3", Flick)); // 2 = miss

//   console.log(board.receiveAttack("6-5", Enemy)); // 4 = already attacked

//   console.log(board.receiveAttack("2-7", Flick)); // 1 = Flick hit Enemy

//   console.log(board.receiveAttack("1-2", Enemy)); // 1 = Enemy hit Flick

//   console.log(board.receiveAttack("3-7", Flick)); // 1 = Flick hit Enemy

//   console.log(board.receiveAttack("1-3", Enemy)); // 1 = Enemy hit and sunk Flick

//   console.log(board.receiveAttack("4-7", Flick)); // 5 = Flick hit and sunk Enemy

//   //   console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("1-2", Flick))); // 3 = can't attack your own

//   //   console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("6-5", Enemy))); // 2 = miss

//   //   console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("7-3", Flick))); // 2 = miss

//   //   console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("6-5", Enemy))); // 4 = already attacked

//   //   console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("2-7", Flick))); // 1 = Flick hit Enemy

//   //   console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("1-2", Enemy))); // 1 = Enemy hit Flick

//   //   console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("3-7", Flick))); // 1 = Flick hit Enemy

//   //   console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("1-3", Enemy))); // 1 = Enemy hit and sunk Flick

//   //   console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("4-7", Flick))); // 5 = Flick hit and sunk Enemy

//   board.print();
// };

//basicAttackTests();

let board = new Gameboard(7);

let Flick = new Player("Flick");
board.addPlayer(Flick);
let Enemy = new Player("Enemy");
board.addPlayer(Enemy);

console.log(board.placeShip("1-2", "x", 3, Flick, "Small ship"));
console.log(board.placeShip("1-4", "x", 4, Enemy), "Big ship");
console.log(board.placeShip("3-4", "x", 2, Flick), "Ski jet");
console.log(board.placeShip("2-1", "y", 4, Enemy), "Submarine");
console.log(board.placeShip("3-7", "y", 4, Flick), "Yacht");
console.log(board.placeShip("5-4", "x", 4, Enemy), "Cruise ship");

console.log(board.receiveAttack("1-1", Flick));
console.log(board.receiveAttack("1-1", Enemy));
console.log(board.receiveAttack("1-3", Flick));
console.log(board.receiveAttack("1-5", Flick));
board.print();

initBoard(board);

// updateDOM(board);

//console.log(board.receiveAttack("1-4", Flick));
