
export class Reef {
    
    reefPatterns = [
        [{"y": 0, "x": 0}, {"y": 1, "x": 0},{"y": 2, "x": 0},{"y": 2, "x": 1}],
        [{"y": 0, "x": 1}, {"y": 1, "x": 1},{"y": 2, "x": 0},{"y": 2, "x": 1}],
        [{"y": 0, "x": 0}, {"y": 1, "x": 0},{"y": 1, "x": 1},{"y": 1, "x": 2},{"y": 2,"x": 2}],
        [{"y": 0, "x": 2}, {"y": 1, "x": 0},{"y": 1, "x": 1},{"y": 1, "x": 2},{"y": 2,"x": 0}],
        [{"y": 0, "x": 0}, {"y": 0, "x": 1},{"y": 1, "x": 0},{"y": 1, "x": 1}],
        [{"y": 0, "x": 0}, {"y": 1, "x": 1},{"y": 2, "x": 2}],
        [{"y": 0, "x": 2}, {"y": 1, "x": 1},{"y": 2, "x": 0}],
    ]

    
    constructor(){
        this.startPoint = {"xAdj": Math.round(Math.random()*2), "yAdj": Math.round(Math.random()*2)} 
        this.pattern = this.setPattern();
    }

    setPattern(){
        let rPBA = this.reefPatterns[Math.round(Math.random() * 6)]
        for(let coord of rPBA){
            coord["x"] += this.startPoint["xAdj"]
            coord["y"] += this.startPoint["yAdj"]
        }
        return rPBA
    }
}