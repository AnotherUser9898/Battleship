class Ship {
    length;
    hits;
    orientation;

    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.orientation = "horizontal";
    }

    hit() {
        if (this.hits < this.length) {
            this.hits += 1;
        } else {
            return;
        }
    }

    getHit() {
        return this.hits;
    }

    isSunk() {
        return this.getLength() == this.getHit();
    }

    getLength() {
        return this.length;
    }
    
    switchOrientation() {
        return this.orientation = this.orientation == "horizontal" ? "vertical" : "horizontal";
    }

    getOrientation() {
        return this.orientation;
    }
}
export {Ship};


