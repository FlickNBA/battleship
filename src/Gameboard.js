import { Ship } from "./Ship";
import { Player } from "./Player";

class Tile {
  constructor(coordinates, status = []) {
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
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
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

    //console.log(ALL);

    ALL.forEach((AA) => {
      let L = "";
      AA.forEach((A) => {
        // console.log(A.status.owner.name);
        if (A.status.length == 1) {
          //console.log(A.status);
          L += `${A.coordinates} ${A.status[0].owner.name}\t`;
        } else if (A.status.length > 1) {
          L += `${A.coordinates} BOTH\t`;
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

  checkHelper(tileStatuses, targetTiles, player) {
    //console.log(tileStatuses);
    //console.log(targetTiles.filter((t) => t != ""));
    //console.log(targetTiles);
    let X = targetTiles.reduce((initial, value) => {
      //console.log(value.status.length);
      //console.log(value.status.some((V) => V.owner == player));
      initial.push(value.status.some((V) => V.owner == player));
      //initial.push(value.status.owner != player);
      return initial;
    }, []);
    //console.log(X);
    return X.some((H) => H == true) ? false : targetTiles;
  }

  checkIfCanPlaceShip(coordinates, axis, length, player) {
    let x = Number(coordinates.split("-")[0]);
    let y = Number(coordinates.split("-")[1]);
    let tileStatuses = [];
    let targetTiles = [];

    if (axis == "x") {
      if (y + (length - 1) <= this.size) {
        for (let i = y; i < y + length; i++) {
          // console.log(`${x}-${i}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${x}-${i}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
      } else {
        return false;
      }
    } else if (axis == "y") {
      if (x + (length - 1) <= this.size) {
        for (let i = x; i < x + length; i++) {
          // console.log(`${i}-${y}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${i}-${y}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
      } else {
        return false;
      }
    }

    return this.checkHelper(tileStatuses, targetTiles, player);
  }

  placeShip(coordinates, axis, length, player, name = "Ship") {
    let check = this.checkIfCanPlaceShip(coordinates, axis, length, player);
    if (check) {
      let ship = new Ship(check, length, player, name);
      player.addShip(ship);
      console.log(check);
      check.forEach((c) => c.status.push(ship));
      return ship;
    } else {
      return false;
    }
  }

  // placeShip(coordinates, axis, length, player) {
  //   let check = this.checkIfCanPlaceShip(coordinates, axis, length, player);
  //   if (check) {
  //     let ship = new Ship(coordinates, length, player);
  //     player.addShip(ship);
  //     check.forEach((c) => c.status.push(ship));
  //     return ship;
  //   } else {
  //     return false;
  //   }
  // }

  receiveAttack(coordinates, player) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
    let tile = this.board.find((t) => t.coordinates == coordinates);
    let statusEmpty = tile.status == "";
    let attackedAlready = tile.attackedBy.includes(player);
    // console.log("status empty: ", statusEmpty);
    // console.log("attacked by player: ", attackedAlready);
    if (attackedAlready) {
      return 4;
    } else {
      if (statusEmpty) {
        tile.attackedBy.push(player);
        return 2;
      } else {
        let howManyShips = tile.status.length;
        if (howManyShips > 1) {
          let enemyShip = tile.status.find((s) => s.owner != player);
          enemyShip.hit();
          tile.attackedBy.push(player);
          return enemyShip.isSunk ? 5 : 1;
        } else {
          let hitMyOwn = tile.status[0].owner == player;
          // console.log("hit my own?", hitMyOwn);
          if (hitMyOwn) {
            return 3;
          } else {
            tile.status[0].hit();
            tile.attackedBy.push(player);
            return tile.status.isSunk ? 5 : 1;
          }
        }
      }
    }
    // if (tile.attackedBy.includes(player)) {
    //   return 4;
    // } else if (tile.status) {
    //   if (player == tile.status.owner) {
    //     return 3;
    //   } else {
    //     tile.attackedBy.push(player);
    //     console.log(tile);
    //     tile.status.hit();
    //     return tile.status.isSunk ? 5 : 1;
    //   }
    // } else {
    //   tile.attackedBy.push(player);
    //   return 2;
    // }
  }

  // receiveAttack(coordinates, player) {
  //   // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
  //   let tile = this.board.find((t) => t.coordinates == coordinates);
  //   console.log(tile);
  //   if (tile.attackedBy.includes(player)) {
  //     return 4;
  //   } else if (tile.status) {
  //     if (player == tile.status.owner) {
  //       return 3;
  //     } else {
  //       tile.attackedBy.push(player);
  //       console.log(tile.status);
  //       //tile.status.hit();
  //       return tile.status.isSunk ? 5 : 1;
  //     }
  //   } else {
  //     tile.attackedBy.push(player);
  //     return 2;
  //   }
  // }

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
