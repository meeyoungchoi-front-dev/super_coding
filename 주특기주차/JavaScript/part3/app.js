// Function

function logger() {
	console.log("logging...");
}

logger();
logger();
logger();

function buySomeFruits(bananaCount, lemonCount) {
	const fruits = `바나나 ${bananaCount}개, 레몬 ${lemonCount}개를 샀다.`;
	return fruits;
}

const bananasAndLemons = buySomeFruits(4, 5);
console.log(bananasAndLemons);

// Function Declaration

calcAge1(1990); // 가능

function calcAge1(birthYear) {
	return 2023 - birthYear;
}

console.log(calcAge1(1990));

// Function Expression

calcAge2(1992); // 불가능

const calcAge2 = function (birthYear) {
	return 2023 - birthYear;
};

console.log(calcAge2(1992));

// Arrow Function

const calcAge3 = (birthYear) => 2023 - birthYear;

console.log(calcAge3(1994));