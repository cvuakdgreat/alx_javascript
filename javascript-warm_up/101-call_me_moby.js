function moby(x, theFunction) {
	let y = 0;
  
	while (y < x) {
	  theFunction();
	  y++;
	}
  }