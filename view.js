const readline = require('readline');
const Model = require('./model');
const { question } = require('readline-sync');

class View extends Model {
  async viewAndPickTopic() {
    const rl = readline.createInterface(process.stdin, process.stdout);

    // rl.question(this.arrOfTopics, (answer) => {
    //   console.log(` Yoou picked topick: number ${answer}`);
    //   const question1 = this.nightHawkArr[0].question;
    //   rl.setPrompt(question1);
    //   rl.prompt();
    //   rl.on('line', (answer1) => {
    //     if (
    //       answer1.toLocaleLowerCase().trim() === this.nightHawkArr[0].answer
    //     ) {
    //       console.log(`${answer1} that is correct answer!`);
    //     } else {
    //       console.log(`${answer1} is wrong answer`);
    //     }
    //     //});
    //     const question2 = this.nightHawkArr[1].question;

    //     rl.setPrompt(question2);
    //     rl.prompt();
    //     rl.on('line', (answer2) => {
    //       if (
    //         answer2.toLocaleLowerCase().trim() === this.nightHawkArr[1].answer
    //       ) {
    //         console.log(`${answer2} that is correct answer!`);
    //       } else {
    //         console.log(`${answer2} is wrong answer`);
    //       }
    //       rl.close();
    //     });
    //   });
    // });

    // const topic = readlineSync.question(this.arrOfTopics);
    // console.log('Hi ' + topic + '!');

    // for (let i = 0; i < this.nightHawkArr.length; i++) {
    //   const questionNext = readlineSync.question(this.nightHawkArr[i].question);
    //   console.log(question);
    // }

    rl.question(this.arrOfTopics, (answer) => {
      console.log(`You picked topick number: ${answer}`);
      rl.question(this.getQuestions()[0].question, (answer2) => {
        if (
          answer2.toLocaleLowerCase().trim() === this.nightHawkArr[0].answer
        ) {
          console.log(`${answer2} that is correct answer!`);
        } else {
          console.log(`${answer2} is wrong answer`);
        }
        rl.question(this.nightHawkArr[1].question, (answer3) => {
          if (
            answer3.toLocaleLowerCase().trim() ===
            this.nightHawkArr[1].answer.toLocaleLowerCase().trim()
          ) {
            console.log(`${answer3} that is correct answer!`);
          } else {
            console.log(`${answer3} is wrong answer`);
          }
          rl.question(this.nightHawkArr[2].question, (answer4) => {
            if (
              answer4.toLocaleLowerCase().trim() === this.nightHawkArr[2].answer
            ) {
              console.log(`${answer4} that is correct answer!`);
            } else {
              console.log(`${answer4} is wrong answer`);
            }

            rl.question(this.nightHawkArr[3].question, (answer5) => {
              if (
                answer5.toLocaleLowerCase().trim() ===
                this.nightHawkArr[3].answer.toLocaleLowerCase().trim()
              ) {
                console.log(`${answer5} that is correct answer!`);
              } else {
                console.log(`${answer5} is wrong answer`);
              }

              rl.question(this.nightHawkArr[4].question, (answer6) => {
                if (
                  answer6.toLocaleLowerCase().trim() ===
                  this.nightHawkArr[4].answer
                ) {
                  console.log(`${answer6} that is correct answer!`);
                } else {
                  console.log(`${answer6} is wrong answer`);
                }
                rl.close();
              });
            });
          });
        });
      });
    });
  }
  getQuestions(topicIndex) {
    topicIndex = parseInt(topicIndex);
    let fileName;
    if (topicIndex === 1) {
      fileName = 'nighthawk_flashcard_data.txt';
    } else if (topicIndex === 2) {
      fileName = 'otter_flashcard_data.txt';
    } else {
      throw new Error('Нет такой темы');
    }
  }
}

const view = new View();

view.allQuestionsAdnAnswers();
view.readTopics();
view.viewAndPickTopic();
// view.askRelevantQuestions();
