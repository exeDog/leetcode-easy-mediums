function runningSum(args) {
    const runningSumArray = new Array(args.length);
    runningSumArray[0] = args[0];

    for(let i = 1; i < args.length; i++) {
        runningSumArray[i] = args[i] + runningSumArray[i -1];
    }

    return runningSumArray;
}

console.log(runningSum([1, 2, 4, 5, 7]));