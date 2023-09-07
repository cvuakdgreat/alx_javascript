function callMeMoby(x, theFunction) {
	let y = 0;
  
	while (y < x) {
	  theFunction();
	  y++;
	}
  };

module.exports.callMeMoby = callMeMoby;