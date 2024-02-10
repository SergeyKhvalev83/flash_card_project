const readline = require('readline');
const chalk = require('chalk');

class View {
  constructor(model) {
    this.model = model;
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  start() {
    this.model.loadTopics();
    console.log(chalk.yellow('Выберите тему:'));
    console.log(chalk.green(this.model.topics.join('\n')));

    this.rl.question('', (topicIndex) => {
      const index = parseInt(topicIndex);
      if (index >= 1 && index <= this.model.topics.length) {
        const questions = this.model.getQuestions(index);
        this.askQuestions(questions);
      } else {
        console.log(chalk.red('Некорректный номер темы.'));
        this.rl.close();
      }
    });
  }

  askQuestions(questions) {
    if (questions.length === 0) {
      this.rl.close();
      console.log(chalk.yellow('Вопросов больше нет!'));
      return;
    }
    const currentQuestion = questions.shift();
    this.rl.question(
      chalk.gray(currentQuestion.question) + '\n',
      (userAnswer) => {
        if (
          userAnswer.toLowerCase().trim() ===
          currentQuestion.answer.toLowerCase().trim()
        ) {
          console.log(chalk.green('Верно!👍'));
        } else {
          console.log(chalk.red('Неверно!👎'));
        }
        this.askQuestions(questions);
      }
    );
  }
}

module.exports = View;
