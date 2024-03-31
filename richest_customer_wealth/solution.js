function richestCustomerWealth(args) {
    let maxWealth = 0;

    args.forEach((customer, index) => {
        const totalWealth = customer.reduce((prevVal, currVal) => prevVal + currVal);

        if (totalWealth > maxWealth) {
            maxWealth = totalWealth;
        }
    });

    return maxWealth;

}

console.log(richestCustomerWealth([[7,1,3], [2,8,7], [1,9,5]]));