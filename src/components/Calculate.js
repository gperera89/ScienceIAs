export const Calculate = (array) => {
	const matchGrades = (array, value1, value2) => {
		return array.filter((v) => v === value1 || v === value2).length;
	};

	const zeros = matchGrades(array, 0);
	const onetwo = matchGrades(array, 1, 2);
	const threefour = matchGrades(array, 3, 4);
	const fivesix = matchGrades(array, 5, 6);

	const freq = [zeros, onetwo, threefour, fivesix];
	const max = Math.max(...freq);
	const index = freq.indexOf(max);

	const average =
		array.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		) / 4;

	if (index === 0) {
		if (average > 0) {
			return 1;
		} else {
			return 0;
		}
	} else if (index === 1) {
		if (average <= 6) {
			return 1;
		} else if (average > 6) {
			return 2;
		}
	} else if (index === 2) {
		if (average <= 14) {
			return 3;
		} else if (average > 14) {
			return 4;
		}
	} else if (index === 3) {
		if (average <= 25) {
			return 5;
		} else if (average > 25) {
			return 6;
		}
	} else {
		return 1000;
	}
};
