import { OceanTile } from "./ocean_tile.js";
import { IslandTile } from "./island_tile.js";
import { Reef } from "./reef.js";

export class SubUnit {
  constructor() {
    this.size = 5;
    this.region;
    this.layout = new Array(this.size).fill(
      new Array(this.size).fill(new OceanTile)
    );
  }

  setCoords(y, x, multiplier) {
    if (y < multiplier || y >= multiplier * 8) {
      this.region = "Polar";
    } else if (y < multiplier * 3 || y >= multiplier * 6) {
      this.region = "Temperate";
    } else {
      this.region = "Tropical";
    }
    console.log(this.region)
    // for (let i = 0; i < this.size; i++) {
    //   for (let j = 0; j < this.size; j++) {
    //     this.layout[i][j].tileCoords = {"x":x, "y":y}
    //   }
    // }
  }

  setHazards() {
    if (this.region === "Polar") this.setIceBergs();
    if (this.region === "Tropical") this.setReefs();
    //if (this.region === "Temperate") console.log("Fuck")
  }

  setIslands() {}

  setReefs() {
    let reef = new Reef
    for(let coord of Reef.pattern){
      this.layout[coord["y"]][coord["x"]] = "Reef"
    }
  }

  setIceBergs() {
    let bergCount = Math.floor(Math.random() * 7) + 2;
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        let temp = Math.random();
        if (temp > 0.5 && bergCount > 0) {
          this.layout[y][x].hazards = ["Iceberg"];
          bergCount--;
        }
      }
    }
  }
}
