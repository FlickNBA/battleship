export class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.ships = [];
    this.possibleHits = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  get shipCount() {
    return this.ships.length;
  }
}
