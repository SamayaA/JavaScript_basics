import * as readline from 'node:readline'; 


function guessNumber(count_attempt=0) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let guessedNumber = Math.round(Math.random() * 10);
    rl.question('Введите число\n', (number)=>{
        const checkNumber = () =>{
                if (number == 'q'){
                    rl.setPrompt(`Вы прервали игру! Количество израсходованных попыток: ${count_attempt}.\n`);
                    rl.prompt();
                    rl.close();
                };
                if (number == guessedNumber) {
                    count_attempt ++;
                    rl.setPrompt(`Вы угадали число! Количество израсходованных попыток: ${count_attempt}.\n`);
                    rl.prompt();
                    rl.close();
                }
                else if (number < guessedNumber) {
                    count_attempt ++;
                    rl.setPrompt(`Больше! Количество израсходованных попыток: ${count_attempt}.\nВведите новое число\n`);
                    rl.prompt();
                    rl.cursor;
                    rl.pause();
                    number = rl.line;
                    checkNumber()
                }
                else if (number > guessedNumber){
                    count_attempt ++;
                    rl.setPrompt(`Меньше! Количество израсходованных попыток: ${count_attempt}.\nВведите новое число\n`);
                    rl.prompt();
                    rl.cursor;
                    rl.pause();
                    number = rl.line;
                    checkNumber()
                }
            }
            checkNumber();
        });
}

guessNumber()