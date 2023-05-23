import { IslandTile } from "./island_tile.js";
import { OceanTile } from "./ocean_tile.js";
import { SubUnit } from "./subunit.js";

export class WorldMap {
  constructor(name, multiplier) {
    this.name = name;
    this.multiplier = multiplier;
    this.size = 9 * this.multiplier;
    this.layout = this.generate();
  }

  generate() {
    let count = 0
    let grid = new Array(this.size).fill(
      new Array(this.size).fill(new SubUnit('tropical'))
    )
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        grid[y][x].setCoords(y, x, this.multiplier);
        // grid[y][x].setIslands()
        grid[y][x].setHazards();
        //console.log(count)
        count++
      }
    }
    return grid
  }
}
