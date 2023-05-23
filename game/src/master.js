import { WorldMap } from "./world_map.js";
import { IslandTile } from "./island_tile.js";
import { OceanTile } from "./ocean_tile.js";
import { Reef } from "./reef.js";

const test = new WorldMap("test", 1)
console.log(test)

function makeMap(size){
    return new WorldMap("test", size)
}

export {test, makeMap}