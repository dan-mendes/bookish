if (Books.find().count() === 0) {	

	Books.insert({	
		author: 'Jorge Luis Borges',
		title: 'Aleph'
	});

	Books.insert({	
		author: 'Isaac Newton',
		title: ' Philosophiae Naturalis Princia Mathematica'
	});

	Books.insert({
		author: 'Karl Marx',
		title: 'Das Kapital'	
	});

}