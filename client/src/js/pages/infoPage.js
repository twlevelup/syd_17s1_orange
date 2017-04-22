
const Page = require('watch_framework').Page;
const $ = require('jquery');
const template = require('../../templates/pages/info.hbs');

const questionsData = require('../../storage/questions.json');

const topicIndex = 0;
let questionIndex = 0;
let topicPage = true;
let alertPage = false;
let prevQIDArray = ['topic'];
let yesButton = '';
let noButton = '';
let backButton = '';
let enterButton = 'ENTER';
let distressButton = '';

const infoPage = Page.extend({
  id: 'info',
  template,
  buttonEvents: {
    right: 'enter',
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: 'home',
    left: 'back',
  },
  back() {
    alertPage = false;
    if (topicPage !== true) {
      const previousId = prevQIDArray.pop();
      questionIndex = previousId;
      if (previousId === 'topic') {
        const topicName = questionsData.topics[topicIndex].name;
        const topicType = questionsData.topics[topicIndex].type;
        this.render(topicName, topicType);
        topicPage = true;
        prevQIDArray = ['topic'];
        questionIndex = 0;
        return;
      }
      const question = questionsData.topics[topicIndex].questions[previousId].question;
      const questionType = questionsData.topics[topicIndex].questions[previousId].type;
      this.render(question, questionType);
    }
  },
  home() {
    questionIndex = 0;
    topicPage = true;
    alertPage = false;
    window.App.navigate('home');
  },
  enter() {
    if (topicPage === true) {
      const firstQuestion = questionsData.topics[topicIndex].questions[0].question;
      const firstQuestionType = questionsData.topics[topicIndex].questions[0].type;
      this.render(firstQuestion, firstQuestionType);
      topicPage = false;
    } else if (alertPage == true) {
      questionIndex = 0;
      alertPage = false;
      topicPage = true;
      window.App.navigate('distressConfirm');
    }
  },

  scrollUp() {
    const yesQID = questionsData.topics[topicIndex].questions[questionIndex].answers.yesQID;
    if (yesQID === 'end' || topicPage === true) {
      return;
    }
    prevQIDArray.push(questionIndex);
    questionIndex = yesQID;
    const currentType = questionsData.topics[topicIndex].questions[yesQID].type;
    const currentQuestion = questionsData.topics[topicIndex].questions[yesQID].question;
    if (currentType == 'Alert') {
      alertPage = true;
    };
    this.render(currentQuestion, currentType);
  },
  scrollDown() {
    const noQID = questionsData.topics[topicIndex].questions[questionIndex].answers.noQID;
    if (noQID === 'end' || topicPage === true) {
      return;
    }
    prevQIDArray.push(questionIndex);
    questionIndex = noQID;
    const currentType = questionsData.topics[topicIndex].questions[noQID].type;
    const currentQuestion = questionsData.topics[topicIndex].questions[noQID].question;
    if (currentType == 'Alert') {
      alertPage = true;
    };
    this.render(currentQuestion, currentType);
  },

  render(currentQuestion, currentType) {
    let renderQuestion = currentQuestion;
    let renderType = currentType;
    if (!currentQuestion) {
      renderQuestion = questionsData.topics[topicIndex].name;
      renderType = questionsData.topics[topicIndex].type;
    }
    if (renderType === 'Question') {
      yesButton = 'YES';
      noButton = 'NO';
      backButton = 'BACK';
      enterButton = '';
      distressButton = '';
      $('#watch').attr('class', 'question info case');
    } else if (renderType === 'Topic') {
      yesButton = '';
      noButton = '';
      backButton = '';
      enterButton = 'ENTER';
      distressButton = '';
      $('#watch').attr('class', 'topic info case');
    } else if (renderType === 'Alert') {
      yesButton = '';
      noButton = '';
      backButton = 'BACK';
      enterButton = '';
      distressButton = 'DISTRESS';
      $('#watch').attr('class', 'advice info case');
    } else {
      yesButton = '';
      noButton = '';
      backButton = 'BACK';
      enterButton = '';
      distressButton = '';
      $('#watch').attr('class', 'advice info case');
    }
    this.$el.html(this.template({ question: renderQuestion, type: renderType, backButton, yesButton, noButton, enterButton, distressButton }));
    return this;
  },
});


module.exports = infoPage;
