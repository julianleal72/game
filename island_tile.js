export class IslandTile //extends Tile 
{
  constructor(tileCoords) {
    this.tileCoords = tileCoords; // basically array of array position - coordinates
    // this.north; 
    // this.south;
    // this.east;
    // this.west;
    this.region;
    
    
    //this.description = once again base on coords and also what items are there
    //this.items = sunken ships, reefs, etc
    //this.events = shark attack, battles, etc
  }
}
