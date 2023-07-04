export class Ship {
  constructor(coordinates, length, owner, name = "Ship") {
    this.coordinates = coordinates;
    this.length = length;
    this.hits = 0;
    this.owner = owner;
    this.name = name;
  }
  hit() {
    this.hits += 1;
  }
  get isSunk() {
    return this.hits >= this.length;
  }
}
