function targetTerdekat(arr) {
	var hasil = 0;

	var posisiO = '';
	var posisiTerdekat0keX = 0;
	
	var posisiX = 0;
	var posisiTerdekatXkeO = 0;

	if (arr.indexOf('x') === -1) {
		hasil = 0;
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].indexOf('o') !== -1) {
				if (posisiX !== 0) {
					posisiTerdekat0keX = i;
					break;
				}
				posisiO = i;
			} else if (arr[i].indexOf('x') !== -1) {
				if (posisiO !== '') {
					posisiTerdekatXkeO = i;
					break;
				}
				posisiX = i;
			}
		}

		if (posisiTerdekatXkeO !== 0) {
			hasil = posisiTerdekatXkeO - posisiO;
		} else if (posisiTerdekat0keX !== 0) {
			hasil = posisiTerdekat0keX - posisiX;
		}
	}

	return hasil;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2