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
		for (var j = 0; j < bio.length; j++) {
			if (j === 2) {
				array[i][j] = array[i][j] + ' ' + array[i][j+1];
			} else if (j === 3) {
				array[i][j] = array[i][j+1];
			}

			newSentence = newSentence + bio[j] + array[i][j];
			console.log(newSentence);

			if (j === 3) {
				console.log('');
			}

			newSentence = '';
		}
	}
}

dataHandling(input);