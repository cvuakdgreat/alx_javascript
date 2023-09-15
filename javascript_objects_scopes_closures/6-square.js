const Square = require('./5-square');


class Square extends Rectangle {
	constructor(size) {
		super(size, size)
		
		
	}
	double(){
		super.double();
	}

	rotate(){
		super.rotate();
	}

	charPrint() {
		if (c) {
			super.print()
			console.log("C".repeat(c))
		}
		else
			super.print()
			console.log("X".repeat(X))

	}
}


module.exports = Square;