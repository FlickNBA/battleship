import { Ship } from "./Ship";

class Tile {
  constructor(coordinates, status = "") {
    this.coordinates = coordinates;
    this.status = status;
    this.attackedBy = [];
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

  print() {
    let ALL = [];
    for (let i = 0; i < this.size; i++) {
      let LINE = [];
      for (let j = 0; j < this.size; j++) {
        LINE.push(this.board[j + i * this.size]);
      }
      ALL.push(LINE);
    }
    console.log(ALL);

    ALL.forEach((AA) => {
      let L = "";
      AA.forEach((A) => {
        if (A.status) {
          L += `${A.coordinates} ${A.status.owner.name}\t`;
        } else {
          L += `${A.coordinates}\t\t`;
        }
      });
      console.log(L);
    });
  }

  get tileCount() {
    return this.board.length;
  }

  checkIfCanPlaceShip(coordinates, axis, length) {
    let x = Number(coordinates.split("-")[0]);
    let y = Number(coordinates.split("-")[1]);
    if (axis == "x") {
      if (y + (length - 1) <= this.size) {
        let tileStatuses = [];
        let targetTiles = [];
        for (let i = y; i < y + length; i++) {
          // console.log(`${x}-${i}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${x}-${i}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
        return tileStatuses.filter((t) => t != "").length == 0 ? targetTiles : false;
      } else {
        return false;
      }
    } else if (axis == "y") {
      if (x + (length - 1) <= this.size) {
        let tileStatuses = [];
        let targetTiles = [];
        for (let i = x; i < x + length; i++) {
          // console.log(`${i}-${y}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${i}-${y}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
        return tileStatuses.filter((t) => t != "").length == 0 ? targetTiles : false;
      } else {
        return false;
      }
    }
  }

  placeShip(coordinates, axis, length, player) {
    let check = this.checkIfCanPlaceShip(coordinates, axis, length);
    if (check) {
      let ship = new Ship(coordinates, length, player);
      check.forEach((c) => (c.status = ship));
      return ship;
    } else {
      return false;
    }
  }

  receiveAttack(coordinates, player) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
    let tile = this.board.find((t) => t.coordinates == coordinates);
    console.log(tile);
    if (tile.attackedBy.includes(player)) {
      return 4;
    } else if (tile.status) {
      if (player == tile.status.owner) {
        return 3;
      } else {
        tile.attackedBy.push(player);
        tile.status.hit();
        return tile.status.isSunk ? 5 : 1;
      }
    } else {
      tile.attackedBy.push(player);
      return 2;
    }
  }

  printAttackResult(attacker, enemy, code) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy

    switch (code) {
      case 1:
        return `${attacker.name} hit ${enemy.name} ship.`;
      case 2:
        return `${attacker.name} missed.`;
      case 3:
        return `${attacker.name} tried to attack his own ship.`;
      case 4:
        return `${attacker.name} already attacked this tile.`;
      case 5:
        return `${attacker.name} hit and sunk ${enemy.name} ship.`;
    }
  }
}
