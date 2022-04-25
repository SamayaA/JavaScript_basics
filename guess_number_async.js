let guessedNumber = Math.round(Math.random() * 10);

async function guessNumber(count_attempt=0) {
    console.log('Введите число\n')
    let number = process.stdin;
    let promise = Promise.resolve(checkNumber(number));
    let result =  await promise;
    count_attempt ++;
    while(result){
        console.log('Введите число\n')
        number = process.stdin;
        promise = Promise.resolve(checkNumber(number));
        result =  await promise;
        ++count_attempt;
    console.log(`Количество израсходованных попыток: ${count_attempt}.\n`);

    }
    console.log(`Количество израсходованных попыток: ${count_attempt}.\n`);
    
}

function checkNumber(number) {
    if (number == 'q'){
        console.log("Вы прервали игру!\n");
        return false
    };
    if (number == guessedNumber) {
        console.log("Вы угадали число!\n");
        return false
    }
    else if (number < guessedNumber) {
        console.log("Больше!\n");
        return true
    }
    else {
        console.log("Меньше!\n");
        return true   
    }
};
guessNumber()