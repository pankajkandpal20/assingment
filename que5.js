// 5. Print all prime numbers occurring in 1st 50 natural numbers
	// HINT1: google how to check if a number is prime or not
    // HINT2: use nested loops
    for (var counter = 1; counter <= 50; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }