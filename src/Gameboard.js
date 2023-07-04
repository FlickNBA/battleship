import { Ship } from "./Ship";

class Tile {
  constructor(coordinates, status = "") {
    this.coordinates = coordinates;
    this.status = status;
  }
}

export class Gameboard {
  constructor(x = 10) {
    this.size = x;
    this.board = [];
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board.push(new Tile(`${i + 1}-${j + 1}`));
      }
    }
  }

  get tileCount() {
    return this.board.length;
  }

  checkIfCanPlaceShip(coordinates, length) {
    let x = Number(coordinates.split("-")[0]);
    let y = Number(coordinates.split("-")[1]);
    //console.log(y + (length - 1));
    if (y + (length - 1) <= this.size) {
      let tileStatuses = [];
      let targetTiles = [];
      for (let i = y; i < y + length; i++) {
        let tile = this.board.find((xxx) => xxx.coordinates == `${x}-${i}`);
        targetTiles.push(tile);
        tileStatuses.push(tile.status);
      }
      return tileStatuses.filter((t) => t != "").length == 0 ? targetTiles : false;
    } else {
      return false;
    }
  }

  placeShip(coordinates, length, player) {
    let check = this.checkIfCanPlaceShip(coordinates, length);
    if (check) {
      let ship = new Ship(coordinates, length, player);
      check.forEach((c) => (c.status = ship));
      return ship;
    } else {
      return false;
    }
  }
}
