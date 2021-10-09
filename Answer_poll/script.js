'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function (options) {
    const x = Number(
      prompt(`What is your favourite programming language?
    0:Javascript
    1:Python
    2:Rust
    3:C++
    (Writte option number)`)
    );

    typeof x === 'number' && x < this.answers.length && this.answers[x]++;
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(poll.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${poll.answers.join(' ,')}`);
    }
  },
};

const btnAnswer = document.querySelector('.poll');

btnAnswer.addEventListener('click', function () {
  poll.registerNewAnswer();
  poll.displayResults();
});
