import { Ship } from "./Ship";
import { drawAttack } from "./DOM";
import { drawShips2 } from "./initBoard";

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

  placeShips(n, index) {
    let shipNames = ["Boat", "Scooter", "Shark", "Bike", "Fish", "Tank"];
    let shipLength = [2, 4, 3, 4, 2, 3];
    for (let i = 0; i < n; i++) {
      let axis = i % 2 == 0 ? "x" : "y";
      let canPlace = false;
      while (!canPlace) {
        console.log("xD");
        let randomTile = this.board[Math.floor(this.board.length * Math.random())].coordinates;
        let can = this.checkIfCanPlaceShip(randomTile, axis, shipLength[i], this.players[index]);
        console.log(can);
        if (can != false) {
          canPlace = true;
          this.placeShip(randomTile, axis, shipLength[i], this.players[index], shipNames[i]);
        }
      }
    }
  }

  botShoot() {
    console.log(this.players[1].possibleHits);
    let randomHit = this.players[1].possibleHits[Math.floor(this.players[1].possibleHits.length * Math.random())];
    this.receiveAttack(randomHit.coordinates, this.players[1]);
    this.updateShipsAlive();
    this.players[1].possibleHits.splice(this.players[1].possibleHits.indexOf(randomHit), 1);
  }

  shootButton(e, p) {
    // console.log(board.receiveAttack("1-1", player));
    let coordinates;
    if (e.target.className != "") {
      coordinates = e.target.offsetParent.id.split("-").splice(1).join("-");
    } else {
      coordinates = e.target.id.split("-").splice(1).join("-");
    }
    let canHit = this.players[0].possibleHits.find((r) => r.coordinates == coordinates);
    //console.log("can hit", canHit);
    if (canHit) {
      console.log(e.target);
      this.receiveAttack(coordinates, p);
      this.players[0].possibleHits.splice(this.players[0].possibleHits.indexOf(this.players[0].possibleHits.find((r) => r.coordinates == coordinates)), 1);
      this.updateShipsAlive();
      this.botShoot();
    }
  }

  endGame(winner, shipsLeft, loser) {
    setTimeout(() => {
      document.querySelector("#main").style["transition-duration"] = "1000ms";
      document.querySelector("#main").style.opacity = 0;
      if (shipsLeft == 777) {
        document.querySelector("#winner").innerHTML = `${winner.name} tied against ${loser.name}!`;
      } else {
        document.querySelector("#winner").innerHTML = `${winner.name} won against ${loser.name} with ${shipsLeft} ships left!`;
      }
    }, 500);
  }

  placeShipButton(e, p) {
    // console.log(e);
    // console.log(p);
    if (p.ships.length < 4) {
      let coordinates = e.target.id.split("-").splice(1).join("-");
      let axis = document.querySelector("#axis").value.split(", ")[0];
      let name = document.querySelector("#axis").value.split(", ")[1];
      let length = Number(document.querySelector("#axis").value.split(", ")[2]);
      let ship = this.placeShip(coordinates, axis, length, p, name);
      if (ship == false) {
        alert("You made a mistake, make sure to double-check.");
      }
      document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to place ship (${this.players[0].ships.length}/4 ships)`;
      this.bothPlayersReady();
    } else {
      console.log("You have maximum amount of ships");
    }
  }

  updateShipsAlive() {
    let playerShips = this.players[0].ships.reduce((accumulator, value) => {
      if (!value.isSunk) accumulator++;
      return accumulator;
    }, 0);
    document.querySelector(".player").innerText = `${this.players[0].name} => ${playerShips}/6 ships alive.`;
    let botShips = this.players[1].ships.reduce((accumulator, value) => {
      if (!value.isSunk) accumulator++;
      return accumulator;
    }, 0);
    document.querySelector(".enemy").innerText = `${this.players[1].name} => ${botShips}/6 ships alive.`;

    if (playerShips == 0 && botShips == 0) {
      this.endGame(this.players[1], 777, this.players[2]);
    } else if (playerShips == 0) {
      this.endGame(this.players[1], botShips, this.players[0]);
    } else if (botShips == 0) {
      this.endGame(this.players[0], playerShips, this.players[1]);
    }
  }

  bothPlayersReady() {
    if (this.players[0].ships.length + this.players[1].ships.length == 12) {
      document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to shoot`;
      document.querySelector("#axis").style.display = "none";

      document.querySelectorAll("#player > div").forEach((playerTile) => {
        playerTile.classList.add("disabled");
      });

      document.querySelectorAll("#enemy > div").forEach((enemyTile) => {
        enemyTile.addEventListener("click", (event) => {
          this.shootButton(event, this.players[0]);
        });
      });

      this.updateShipsAlive();
    }
  }

  startGame() {
    document.querySelectorAll("#player > div").forEach((playerTile) => {
      playerTile.addEventListener("click", (event) => {
        this.placeShipButton(event, this.players[0]);
      });
    });

    this.placeShips(6, 0);

    this.placeShips(6, 1);

    this.bothPlayersReady();

    //document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to place ship (${this.players[0].ships.length}/4 ships)`;
  }

  addPlayer(player, id) {
    player.possibleHits = JSON.parse(JSON.stringify(this.board));
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
    let index = player.id == "player" ? 0 : 1;
    let check = this.checkIfCanPlaceShip(coordinates, axis, length, player);
    if (check) {
      let ship = new Ship(check, length, player, name);
      player.addShip(ship);
      console.log(check);
      check.forEach((c) => c.status.push(ship));
      drawShips2(this.board, player);
      return ship;
    } else {
      return false;
    }
  }

  receiveAttack(coordinates, player) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
    console.log(coordinates);
    let tile = this.board.find((t) => t.coordinates == coordinates);
    //console.log(tile.status.length);
    //let statusEmpty = tile.status == "";
    console.log(this.board);
    console.log(tile);
    let statusEmpty = tile.status.length == 0;
    let attackedAlready = tile.attackedBy.includes(player);
    if (attackedAlready) {
      return 4;
    } else {
      if (statusEmpty) {
        tile.attackedBy.push(player);
        drawAttack(coordinates, player, 2);
        return 2;
      } else {
        let howManyShips = tile.status.length;
        if (howManyShips > 1) {
          let enemyShip = tile.status.find((s) => s.owner != player);
          enemyShip.hit();
          tile.attackedBy.push(player);
          drawAttack(coordinates, player, enemyShip.isSunk ? 5 : 1);
          return enemyShip.isSunk ? 5 : 1;
        } else {
          let hitMyOwn = tile.status[0].owner == player;
          // console.log("hit my own?", hitMyOwn);
          if (hitMyOwn) {
            drawAttack(coordinates, player, 3);
            return 3;
          } else {
            tile.status[0].hit();
            tile.attackedBy.push(player);
            drawAttack(coordinates, player, tile.status[0].isSunk ? 5 : 1);
            return tile.status[0].isSunk ? 5 : 1;
          }
        }
      }
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
