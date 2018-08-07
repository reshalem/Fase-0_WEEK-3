var input = [
				["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Jayapura","6/4/1970", "Berkebun"]
			];

function dataHandling(array) {
	var bio = ['Nomor ID:  ', 'Nama Lengkap:  ', 'TTL:  ', 'Hobi:  ']; 	
	var newSentence = '';

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length-1; j++) {
			if (j === 2) {
				input[i][j] = input[i][j] + ' ' + input[i][j+1];
			} else if (j === 3) {
				input[i][j] = input[i][j+1];
			}

			newSentence = newSentence + bio[j] + input[i][j];
			console.log(newSentence);

			if (j === 3) {
				console.log('');
			}

			newSentence = '';
		}

		newSentence = '';
	}
}

dataHandling(input);