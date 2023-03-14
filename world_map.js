import { IslandTile } from "./island_tile.js";
import { OceanTile } from "./ocean_tile.js";

export class WorldMap {
  constructor(name, multiplier) {
    this.subUnit = 5
    this.name = name;
    this.multiplier = multiplier
    this.size = 45*multiplier;
    this.layout = this.generate();
  }
  
  generate() {
    let grid = new Array(this.size).fill(new Array(this.size).fill(new OceanTile))
    //console.log(grid)
    this.populateRegions(grid)
    this.populateHazards(grid)
    //console.log(grid)
    return grid 
  }

  populateRegions(grid) {
    for(let y = 0; y < this.size; y++){
      for(let x = 0; x < this.size; x++){
        grid[y][x].tileCoords = {"x": x, "y": y}
        
        if(y < this.multiplier*this.subUnit || y >= this.multiplier*this.subUnit*8) grid[y][x].region = "Polar"
        else if (y < this.multiplier*this.subUnit*3 || y >= this.multiplier*this.subUnit*6) grid[y][x].region = "Temperate"
        else grid[y][x].region = "Tropical" 
        // if(x != 0) grid[y][x].west = grid[y][x-1]
        // if(y != 0) grid[y][x].north = grid[y-1][x-1]
        // if(x != this.size - 1) grid[y][x].east = grid[y][x+1]
        // if(y != this.size - 1) grid[y][x].south = grid[y+1][x]
      }
    }
  }

  populateHazards(grid){
    for(let i = 0; i < this.size; i+=5){
      for(let j = 0; j < this.size; j+=5){
        
      }
    }
  }
}


