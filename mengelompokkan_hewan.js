function groupAnimals(animals) {
	var abjadDepan = '';
	var arrA = [];
	var arrB = [];
	var arrC = [];
	var arrD = [];
	var arrE = [];
	var arrF = [];
	var arrG = [];
	var arrH = [];
	var arrI = [];
	var arrJ = [];
	var arrK = [];
	var arrL = [];
	var arrM = [];
	var arrN = [];
	var arrO = [];
	var arrP = [];
	var arrQ = [];
	var arrR = [];
	var arrS = [];
	var arrT = [];
	var arrU = [];
	var arrV = [];
	var arrW = [];
	var arrX = [];
	var arrY = [];
	var arrZ = [];

	for (var i = 0; i < animals.length; i++) {
		abjadDepan = animals[i][0];

		switch (abjadDepan) {
			case 'a':
				arrA.push(animals[i]);
				break;
			case 'b':
				arrB.push(animals[i]);
				break;
			case 'c':
				arrC.push(animals[i]);
				break;
			case 'd':
				arrD.push(animals[i]);
				break;
			case 'e':
				arrE.push(animals[i]);
				break;
			case 'f':
				arrF.push(animals[i]);
				break;
			case 'g':
				arrG.push(animals[i]);
				break;
			case 'h':
				arrH.push(animals[i]);
				break;
			case 'i':
				arrI.push(animals[i]);
				break;
			case 'j':
				arrJ.push(animals[i]);
				break;
			case 'k':
				arrK.push(animals[i]);
				break;
			case 'l':
				arrL.push(animals[i]);
				break;
			case 'm':
				arrM.push(animals[i]);
				break;
			case 'n':
				arrN.push(animals[i]);
				break;
			case 'o':
				arrO.push(animals[i]);
				break;
			case 'p':
				arrP.push(animals[i]);
				break;
			case 'q':
				arrQ.push(animals[i]);
				break;
			case 'r':
				arrR.push(animals[i]);
				break;
			case 's':
				arrS.push(animals[i]);
				break;
			case 't':
				arrT.push(animals[i]);
				break;
			case 'u':
				arrU.push(animals[i]);
				break;
			case 'v':
				arrV.push(animals[i]);
				break;	
			case 'w':
				arrW.push(animals[i]);
				break;
			case 'x':
				arrX.push(animals[i]);
				break;
			case 'y':
				arrY.push(animals[i]);
				break;
			case 'z':
				arrZ.push(animals[i]);
				break;
			default:
				console.log('undefined');
				break;
		}
	}

	var allArray = [arrA, arrB, arrC, arrD, arrE, arrF, arrG, arrH, arrI, arrJ, arrK, arrL, arrM, arrN, arrO, arrP, arrQ, arrS, arrT, arrU, arrV, arrW, arrX, arrY, arrZ];
	var lastArray = [];

	for (var i = 0; i < allArray.length; i++) {
		if (allArray[i].length !== 0) {
			lastArray.push(allArray[i]);
		}
	}

	return lastArray;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// function groupAnimals(animals) {
// 	var abjadDepan = '';
// 	var result = [];

// 	for (var i = 0; i < animals.length; i++) {
// 		abjadDepan = animals[i][0];

// 		if (result[abjadDepan] === undefined) {
// 			result[abjadDepan] = [];
// 		}

// 		result[abjadDepan].push(animals[i]);
// 	}

// 	return result;
// }

// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ c: [ 'cacing' ],
//   a: [ 'ayam', 'anoa' ],
//   k: [ 'kuda', 'kancil' ] ]]