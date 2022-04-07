function getPrimeNumbers(n) {
    let prime_numbers_array = [];
    let base_prime_nums = new Array(2, 3, 5, 7);
    i = 2;
    let count = 0;
    while (count < n){
        i ++;
        if (
             (base_prime_nums.includes(i)) | 
             !((i % 2 === 0) | (i % 3 === 0) |
             (i % 5 === 0) | (i % 7 === 0))
            ) {
                prime_numbers_array.push(i);
                count ++;
        }
    }
    return prime_numbers_array;
};

function main(){
    console.time();
    n = process.argv[2];
    result = getPrimeNumbers(n);
    console.log(result);
    console.timeEnd();
};

main();

