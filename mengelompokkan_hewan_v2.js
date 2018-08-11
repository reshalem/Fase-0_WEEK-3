function groupAnimals(animals) {
	var abjadDepan = '';
	var temp = [];
	var result = [];
	var arrAbjad = [];

	for (var i = 0; i < animals.length; i++) {
		if (arrAbjad.indexOf(animals[i][0]) === -1) {
			arrAbjad.push(animals[i][0]);
		}
	}

	for (var i = 0; i < arrAbjad.length; i++) {
		for (var j = 0; j < animals.length; j++) {
			abjadDepan = animals[j][0];

			if (abjadDepan === arrAbjad[i]) {
				temp.push(animals[j]);
			}
		}

		result.push(temp);
		temp = [];
	}

	result.sort();
	return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]