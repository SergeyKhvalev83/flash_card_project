const Model = require('./model-class');
const View = require('./view-class');
const chalk = require('chalk');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  start() {
    this.view.start();
    this.view.rl.on('close', () => {
      console.log(chalk.yellow('Работа завершена'));
      process.exit(0);
    });
  }
}

const model = new Model();
const view = new View(model);
const controller = new Controller(model, view);
controller.start();
