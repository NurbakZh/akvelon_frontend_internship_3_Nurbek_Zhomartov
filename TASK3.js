//Task 1
function reverseBits(a){ 
	let b = (a >>> 0).toString(2);
	b = b.split("");
	b = b.reverse();
	return parseInt(b.join(""),2);
}

//Task 2
function factorial(a){ 
	let s = 1;
	for(let i = 1; i < a+1; i++) {
		s = s*i;
	}
	return s;
}

//Task 3
function getUniqueWords(a) {
	return a.split(" ");
}

console.log(reverseBits(417));
console.log(reverseBits(267));
console.log(reverseBits(0));
console.log(reverseBits(2017));
console.log(reverseBits(1023));
console.log(reverseBits(1024),"\n");

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(17),"\n");

console.log(getUniqueWords("easy come easy go"));
console.log(getUniqueWords("first things first"));
console.log(getUniqueWords(""));