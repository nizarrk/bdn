// Nomor 1
function nomor1() {
    console.log('=====Nomor 1=====');
    let input = 5;
    let result = '';

    for (let i = 0; i <= input; i++) {
        for (let j = input; j >= 0; j--) {
            if (j > i) {
                result += ' ';
            } else {

                result += '*';
            }
        }
        console.log(result);
        result = '';
    }
}

nomor1();

// Nomor 2
function nomor2() {
    console.log('=====Nomor 2=====');
    let input = 5;
    let result = '';

    for (let i = input - 1; i >= 0; i--) { 
        // spasi luar 
        for (let j = input - 1; j > i; j--) { 
            result += " "; 
        } 

        result += '#';

        // spasi dalam
        for (let k = 1; k < (i * 2); k++) {
            result += " "; 
        } 

        if (i >= 1) result += '#';

        console.log(result);
        result = ''; 
    }
}

nomor2();

// Nomor 3
a = 3
b = 1
c = 2
console.log('=====Nomor 3=====');
console.log({
    a : 3,
    b : 1,
    c : 2
});

// Nomor 4
// output i!!*!**
console.log('=====Nomor 4=====');
console.log('i!!*!**');

// Nomor 5
// output unlimited
console.log('=====Nomor 5=====');
console.log('unlimited');


// Nomor 6
function primeNumber(number) {
    console.log('=====Nomor 6=====');
    if (Number.isInteger(number)) {
        let isPrime = true;
        
        if (number > 1) {
            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                console.log(`${number} is a prime number`);
            } else {
                console.log(`${number} is a not prime number`);
            }
        } else {
            console.log(`${number} is a prime number`);
        }
    }
}

primeNumber(269);

// Nomor 7
function grade(arr) {
console.log('=====Nomor 7=====');
    let total = arr.reduce((prev, current) => prev + current);
    let avg = total/arr.length;

    let output = {};
    
    switch (true) {
        case (avg < 60):
            output = {
                grade  : 'E',
                status : 'Fail'
            }
            break;
        case (avg >= 60 && avg <= 69):
            output = {
                grade  : 'D',
                status : 'Fail'
            }
            break;
        case (avg >= 70 && avg <= 79):
            output = {
                grade  : 'C',
                status : 'Pass'
            }
            break;
        case (avg >= 80 && avg <= 89):
            output = {
                grade  : 'B',
                status : 'Pass'
            }
            break;
        case (avg >= 90 && avg <= 100):
            output = {
                grade  : 'A',
                status : 'Pass'
            }
            break;
    
        default:
            break;
    }

    console.log(output);
}

grade([70, 80, 90, 85, 95]);

// Nomor 8
function sortArray(arr) {
console.log('=====Nomor 8=====');
    let asc = arr.slice();
    let desc = arr.slice();

    let output = {
        input : arr,
        ascending: asc.sort(),
        descending: desc.sort((a, b) => b - a)
    }

    console.log(output);
}

sortArray([1, 3, 7, 2, 4])

// Nomor 9
function rockPaperScissor(param1, param2) {
    console.log('=====Nomor 9=====');
    let output = {};

    switch (true) {
        case (param1 == 'paper' && param2 == 'rock'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 1 wins!'
            }
            break;
        case (param1 == 'paper' && param2 == 'scissor'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 2 wins!'
            }
            break;
        case (param1 == 'rock' && param2 == 'scissor'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 1 wins!'
            }
            break;
        case (param2 == 'paper' && param1 == 'rock'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 2 wins!'
            }
            break;
        case (param2 == 'paper' && param1 == 'scissor'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 1 wins!'
            }
            break;
        case (param2 == 'rock' && param1 == 'scissor'):
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Player 2 wins!'
            }
            break;
    
        default:
            output = {
                p1 : param1,
                p2 : param2,
                output: 'Tied!'
            }
            break;
    }

    console.log(output);
}

rockPaperScissor('paper', 'rock');