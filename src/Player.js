export class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  get shipCount() {
    return this.ships.length;
  }
}
