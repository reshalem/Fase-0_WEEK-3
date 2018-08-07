var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array) {
	array.splice(1, 1, 'Roman Alamsyah Elsharawy');
	array.splice(2, 1, 'Provinsi Bandar Lampung');
	array.splice(4, 0, 'Pria', 'SMA Internasional Metro');
	array.splice(6, 1);
	
	var originalDate = array[3].split('/');
	var modifiedDate = array[3].split('/');

	switch (modifiedDate[1]) {
		case '01': 
			modifiedDate[1] = 'Januari';
			break;
		case '02': 
			modifiedDate[1] = 'Februari';
			break;
		case '03': 
			modifiedDate[1] = 'Maret';
			break;
		case '04': 
			modifiedDate[1] = 'April';
			break;
		case '05': 
			modifiedDate[1] = 'Mei';
			break;
		case '06': 
			modifiedDate[1] = 'Juni';
			break;
		case '07': 
			modifiedDate[1] = 'Juli';
			break;
		case '08': 
			modifiedDate[1] = 'Agustus';
			break;
		case '09': 
			modifiedDate[1] = 'September';
			break;
		case '10': 
			modifiedDate[1] = 'Oktober';
			break;
		case '11': 
			modifiedDate[1] = 'November';
			break;
		case '12': 
			modifiedDate[1] = 'Desember';
			break;
		default:
			modifiedDate[1] = 'undefined';
			break;
	}

	console.log(array);
	console.log(modifiedDate[1]);

	var modifiedDate2 = array[3].split('/');
	modifiedDate2.sort(function(a, b) {return b - a});
	console.log(modifiedDate2);

	var modifiedDate3 = originalDate.join('-');
	console.log(modifiedDate3);

	var name = array[1].slice(0, 15);
	console.log(name);
}

dataHandling2(input);