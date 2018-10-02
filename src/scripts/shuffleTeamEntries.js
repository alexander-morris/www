window.addEventListener('load', aboutUsShuffle)


function aboutUsShuffle() {
	// console.log('test')
	var el = document.getElementById('aboutUsSet'); 
	var children = []; 
	// console.log(el.children.length); 
	var setCount = el.children.length; 
	for (var i = 0; i < setCount; i++) { 
		// console.log('removing child', setCount, i, document.getElementById('aboutUsSet').children[0]); 
		children.push(document.getElementById('aboutUsSet').children[0]); 
		document.getElementById('aboutUsSet').children[0].remove()  
	} 
	// console.log(children); 
	children = shuffle(children); 
	// console.log(children); 
	for ( var i = 0; i < children.length; i++ ) { 
		el.appendChild(children[i]) 
	} 
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
}