function calculateNumberOfSteps(number) {
    let steps = 0;

    while (number > 0) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number -= 1;
        }

        steps += 1;
    }

    return steps;
}

console.log(calculateNumberOfSteps(10));