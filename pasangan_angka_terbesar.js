function pasanganTerbesar(num) {
	var numStr = num.toString();
	var arrNum = [];
	var combineNum = '';
	var oriNum = [];
	var max = 0;

	for (i = 0; i < numStr.length; i++) {
		combineNum = numStr.slice(i, i+2);

		if (combineNum.length > 1) {
			arrNum.push(combineNum);
		}

		combineNum = '';
	}

	for (var i = 0; i < arrNum.length; i++) {
		oriNum.push(Number(arrNum[i]));
	}

	// var maxNum = 0;
	// maxNum = Math.max(...oriNum);
	// return maxNum;

	for (var i = 0; i < oriNum.length; i++) {
		if (oriNum[i] > max) {
			max = oriNum[i];
		}
	}

	return max;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99