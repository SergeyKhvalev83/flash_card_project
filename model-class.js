const fs = require('fs');
const chalk = require('chalk');

class Model {
  constructor() {
    this.topics = [];
  }

  loadTopics() {
    const files = fs.readdirSync('./topics/');
    this.topics = files.map((file, index) => {
      const name = file.slice(0, file.indexOf('_'));
      return `${index + 1}. ${name}`;
    });
  }

  getQuestions(topicIndex) {
    topicIndex = parseInt(topicIndex);
    let fileName;
    if (topicIndex === 1) {
      fileName = 'nighthawk_flashcard_data.txt';
    } else if (topicIndex === 2) {
      fileName = 'otter_flashcard_data.txt';
    } else if (topicIndex === 3) {
      fileName = 'plants_flashcard_data.txt';
    } else if (topicIndex === 4) {
      fileName = 'raccoon_flashcard_data.txt';
    } else {
      throw new Error('Некорректный номер темы.');
    }

    const topicFile = fs.readFileSync(`./topics/${fileName}`, 'utf-8');
    const lines = topicFile
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '');

    const questions = [];
    for (let i = 0; i < lines.length; i += 2) {
      if (i + 1 < lines.length) {
        questions.push({ question: lines[i], answer: lines[i + 1] });
      }
    }
    return questions;
  }
}

module.exports = Model;
