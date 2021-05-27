function fabionacci(number) {
	var answer = [0, 1]
	for (var i = 2; i < number; i++) {
		answer.push(answer[i - 2] + answer[i - 1])
	}
	return answer
}

console.log(fabionacci(5))


function fabionacciRecursive(number) {
	if (number <= 1) {
		return number;
	} else {
		return fabionacciRecursive(number - 1) + fabionacciRecursive(number - 2);
	}
}

console.log(fabionacciRecursive(3))