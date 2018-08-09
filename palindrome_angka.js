function palindrome(kata) {
	var balik = '';
	for (var i = kata.length-1; i >= 0; i--) {
		balik = balik + kata[i];
	}
	
	if (balik === kata) {
		return true;
	} else {
		return false;
	}
}

function angkaPalindrome(num) {
	var palNumber;
	var numStr = num.toString();
	
	if (palindrome(numStr) === true || palindrome(numStr) === false) {
		for (var i = num+1; i < 1500; i++) {
			var x = i.toString();
			if (palindrome(x) === true) {
				return x;
			}
		}
	}
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(1000)); // 1001