function fizzBuzz(n) {
    const result = [];

    const divisibleBy3 = val => val % 3 === 0;
    const divisibleBy5 = val => val % 5 === 0;

    for(let i = 1; i <= n; i++) {
        let str = '';

        if (divisibleBy3(i)) {
            str += 'fizz';
        }

        if (divisibleBy5(i)) {
            str += 'buzz'
        }

        if (str === '') {
            str = i.toString();
        }

        result.push(str);
    }

    return result;
}

console.log(fizzBuzz(19));