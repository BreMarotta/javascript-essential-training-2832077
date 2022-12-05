class Purse {
    constructor(
        name,
        color,
        strapLength
    ) {
        this.name = name;
        this.color = color;
        this.strapLength = strapLength;
    }
    chageColor(x) {
        this.color = x;
    }
    newStrapLength(num){
        this.strapLength = num;
    }
}

export default Purse;