"use strict";
window.onload = function () {
    const words = ['HOUSE', "ESPECIAL", "CRUCIAL", "SUMMARY", "NIGHTMARE"];
    const answ = document.getElementById("answ");
    const correctUsedLetters = document.getElementById("correctUsed");
    const incorrectUsedLetters = document.getElementById("incorrectUsed");
    const countInput = document.getElementById("count");
    const remainEl = document.getElementById("remain");
    const guessButton = document.getElementById("guess");
    let guess = "";
    let word = words[Math.floor(Math.random() * words.length)];
    let end = false;
    let remain = word.length - 2;
    countInput.innerHTML = 0;
    correctUsedLetters.innerHTML = "";
    incorrectUsedLetters.innerHTML = "";
    let answer = [];
    answer[0] = word[0];
    answer[word.length - 1] = word[word.length - 1];
    for (let i = 1; i < word.length - 1; i++) {
        answer[i] = "_";
    }
    console.log(answer);
    answ.innerHTML = answer.join(" ");
    remainEl.innerHTML = remain;

    guessButton.addEventListener('click', () => {
        if (end !== true) {
            let correct = false;
            countInput.innerHTML++;
            guess = prompt("guess the letter");
            for (let i = 0; i < word.length; i++) {
                if (guess.toUpperCase() === word[i]) {
                    answer[i] = word[i];
                    remain--;
                    word = word.replace(word[i], " ");
                    correct = true;
                }
            }
            if (correct === false) {
                incorrectUsedLetters.innerHTML += guess.toUpperCase();
            } else if (correct === true) {
                correctUsedLetters.innerHTML += guess.toUpperCase();
            }
            answ.innerHTML = answer.join(" ");
            remainEl.innerHTML = remain;
            if (remain <= 0) {
                alert("Victory!");
                end = true;
            } else if (countInput.innerHTML == 10) {
                alert('Loss');
                end = true;
            }
        }
    });
};