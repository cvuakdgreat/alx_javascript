class Rectangle {
	constructor(w, h){

		if (w <= 0|| h <= 0) {
			this.width = undefined
			this.height = undefined
		}
		else {
			this.width = w
			this.height = h
		}
	}

	print() {

		for (let index = 0; index <= this.height; index++) {
			for (let x = 0; x < this.width; x++) {
				console.log("X")
			}			
		}
	}
};


module.exports = Rectangle;