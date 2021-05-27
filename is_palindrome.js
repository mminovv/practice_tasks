function isPalindrome(string) {
	reversed = string.split("").reverse().join("");
	if (string == reversed) {
		return true
	} else {
		return false
	}
}

console.log(isPalindrome('radar'))
console.log(isPalindrome(''))
console.log(isPalindrome('a'))
console.log(isPalindrome('abs'))
console.log(isPalindrome('ишак ищет у тещи каши'))