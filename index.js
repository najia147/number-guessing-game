
 let minNum = 1;
        let maxNum = 50;
        let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        let attempts = 0;
        
        function checkGuess() {
            let guess = Number(document.getElementById('guessInput').value);
            let message = document.getElementById('message');
            let attemptsDisplay = document.getElementById('attempts');

            if (isNaN(guess)) {
                message.textContent = 'Please enter a valid number';
            } else if (guess < minNum || guess > maxNum) {
                message.textContent = 'Please enter a number between ' + minNum + ' and ' + maxNum;
            } else {
                attempts++;
                attemptsDisplay.textContent = attempts;
                if (guess < answer) {
                    message.textContent = 'TOO LOW! TRY AGAIN!';
                } else if (guess > answer) {
                    message.textContent = 'TOO HIGH! TRY AGAIN!';
                } else {
                    message.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
                    document.getElementById('guessInput').disabled = true;
                }
            }
        }
