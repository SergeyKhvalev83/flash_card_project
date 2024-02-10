const fs = require('fs');

class Model {
  constructor() {
    this.arrOfTopics = '';
    this.nightHawkArr = [];
    this.otterArr = [];
    this.racoonArr = [];
  }

  // to read every file name and get topic of each of them
  readTopics() {
    const dirContent = fs.readdirSync('topics');
    const arr = dirContent.map(
      (each, index) => index + 1 + '. ' + each.slice(0, each.indexOf('_'))
    );
    this.arrOfTopics = arr.join('\n') + '\n';
  }

  allQuestionsAdnAnswers() {
    //hawks
    let entireStrHawk = fs.readFileSync(
      'topics\\nighthawk_flashcard_data.txt',
      'utf8'
    );
    entireStrHawk = entireStrHawk
      .split('\n')
      .filter((each) => each !== '' && each !== '\r');

    const questHawk = [];
    const answHawk = [];
    for (let i = 0; i < entireStrHawk.length; i++) {
      const str = entireStrHawk[i].replace('\r', '');
      if (i % 2 !== 0) {
        questHawk.push(str);
      } else {
        answHawk.push(str);
      }
    }
    for (let q = 0, a = 0; q < questHawk.length; q++, a++) {
      const obj = {};
      obj.question = answHawk[q];
      obj.answer = questHawk[a];
      this.nightHawkArr.push(obj);
    }

    //otters==================
    let entireStrOtter = fs.readFileSync(
      'topics\\otter_flashcard_data.txt',
      'utf8'
    );
    entireStrOtter = entireStrOtter
      .split('\n')
      .filter((each) => each !== '' && each !== '\r');

    const questOtter = [];
    const answOtter = [];
    for (let i = 0; i < entireStrOtter.length; i++) {
      const str = entireStrOtter[i].replace('\r', '');
      if (i % 2 !== 0) {
        questOtter.push(str);
      } else {
        answOtter.push(str);
      }
    }

    for (let q = 0, a = 0; q < answOtter.length; q++, a++) {
      const obj = {};
      obj.question = answOtter[q];
      obj.answer = questOtter[a];
      this.otterArr.push(obj);
    }

    //Racoon============================
    let entireStrRaccoon = fs.readFileSync(
      'topics\\raccoon_flashcard_data.txt',
      'utf8'
    );
    entireStrRaccoon = entireStrRaccoon
      .split('\n')
      .filter((each) => each !== '' && each !== '\r');

    const questRaccoon = [];
    const answRaccoon = [];
    for (let i = 0; i < entireStrRaccoon.length; i++) {
      const str = entireStrRaccoon[i].replace('\r', '');
      if (i % 2 !== 0) {
        questRaccoon.push(str);
      } else {
        answRaccoon.push(str);
      }
    }

    for (let q = 0, a = 0; q < answRaccoon.length; q++, a++) {
      const obj = {};
      obj.question = answRaccoon[q];
      obj.answer = questRaccoon[a];
      this.racoonArr.push(obj);
    }
  }

  // getTopicQuestions(id) {
  //   if (id === 1) {
  //     return this.nightHawkArr;
  //   } else if (ad === 2) {
  //     return this.otterArr;
  //   } else if (id === 3) {
  //     return this.racoonArr;
  //   }
  //   return 'wrong id';
  // }
}

const model = new Model();
// // console.log(model.arrOfQuestionaAndAnswers);

// model.readTopics();
// console.log('RETRIVED TOPICS: ', model.arrOfTopics);

console.log(model.allQuestionsAdnAnswers());
console.log('ARR OF Q AND A FOR HAWKS: ', model.nightHawkArr);
console.log('ARR OF Q AND A FOR OTTERS: ', model.otterArr);
console.log('ARR OF Q AND A FOR RACCOON: ', model.racoonArr);

module.exports = Model;
