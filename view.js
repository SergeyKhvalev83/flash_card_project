const readlinel = require('readline');
const Model = require('./model');
const { question } = require('readline-sync');

class View extends Model {
  viewAndPickTopic() {
    const rl = readlinel.createInterface(process.stdin, process.stdout);

    rl.question(this.arrOfTopics, (answer) => {
      console.log(` Yoou picked topick: number ${answer}`);
      // for (let i = 0; i < this.nightHawkArr.length; i++) {
      // rl.question(this.nightHawkArr[i].question, (answer) => {
      //   // if (answer === this.nightHawkArr[i].answer) {
      //   //   console.log(`${answer} is correct`);
      //   // }
      //   // console.log(`${answer} is WRONG`);
      const question1 = this.nightHawkArr[0].question;
      rl.setPrompt(question1);
      rl.prompt();
      rl.on('line', (answer1) => {
        if (
          answer1.toLocaleLowerCase().trim() === this.nightHawkArr[0].answer
        ) {
          console.log(`${answer1} that is correct answer!`);
        } else {
          console.log(`${answer1} is wrong answer`);
        }
      });
      //}


      const question2 = this.nightHawkArr[1].question;
      rl.setPrompt(question2);
      rl.prompt();
      rl.on('line', (answer2) => {
        if (
          answer2.toLocaleLowerCase().trim() === this.nightHawkArr[1].answer
        ) {
          console.log(`${answer2} that is correct answer!`);
        } else {
          console.log(`${answer2} is wrong answer`);
        }
      });





      // rl.close();
    });
  }

  // askRelevantQuestions() {
  //   const rl = readlinel.createInterface(process.stdin, process.stdout);

  //   for (let i = 0; i < this.nightHawkArr.length; i++) {
  //     // rl.question(this.nightHawkArr[i].question, (answer) => {
  //     //   // if (answer === this.nightHawkArr[i].answer) {
  //     //   //   console.log(`${answer} is correct`);
  //     //   // }
  //     //   // console.log(`${answer} is WRONG`);
  //     const question1 = this.nightHawkArr[i].question;
  //     rl.setPrompt(question1);
  //     rl.prompt();
  //     rl.on('line', (answer1) => {
  //       if (
  //         answer1.toLocaleLowerCase().trim() === this.nightHawkArr[1].answer
  //       ) {
  //         console.log(`${answer1} that is correct answer!`);
  //       } else {
  //         console.log(`${answer1} is wrong answer`);
  //       }
  //     });
  //   }
  // }
}

/*
 //second

      rl.setPrompt(this.nightHawkArr[1].question);
      rl.prompt();
      rl.on('line', (answer1) => {
        if (
          answer1.toLocaleLowerCase().trim() === this.nightHawkArr[1].answer
        ) {
          console.log(`${answer1} that is correct answer!`);
        } else {
          console.log(`${answer1} is wrong answer`);
        }
      });
    });
  }
*/

const view = new View();
view.allQuestionsAdnAnswers();
view.readTopics();
view.viewAndPickTopic();
// view.askRelevantQuestions();
