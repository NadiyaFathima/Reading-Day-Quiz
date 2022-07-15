const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .11)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which day is celebrated as Reading Day?',
    answers: [
      { text: 'June 19', correct: true },
      { text: 'June 22', correct: false },
      { text: 'July 19', correct: false },
      { text: 'July 22', correct: false }
    ]
  },
  {
    question: 'When was PN Panicker born?',
    answers: [
      { text: '1901 February 1', correct: false },
      { text: '1903 March 1', correct: false },
      { text: '1901 March 1', correct: true },
      { text: '1901 June 19', correct: false }
    ]
  },
  {
    question: 'In which year did PN Panicker start a Library in his Village?',
    answers: [
      { text: 'In 1932', correct: false },
      { text: 'In 1926', correct: true },
      { text: 'In 1928', correct: false },
      { text: 'In 1931', correct: false }
    ]
  },
  {
    question: 'Which year did Reading Day start in Kerala?',
    answers: [
      { text: '1997', correct: false },
      { text: '1992', correct: false },
      { text: '1996', correct: true },
      { text: '1994', correct: false }
    ]
  },
  {
  question: 'Which day is known as World Book Day?',
  answers:[
    { text: 'April 23', correct: true },
    { text: 'May 23', correct: false },
    { text: 'April 30', correct: false },
    { text: 'June 19', correct: false }
  ]
},
{
    question: 'Who is the father of the Malayalam language?',
    answers:[
      { text: 'PN Panikkar', correct: false },
      { text: 'Cherusseri Namboothiri', correct: false },
      { text: 'Kunchan Nambiar', correct: false },
      { text: 'Thunchaththu Ezhuthachan', correct: true }
    ]
  },
  {
    question: 'Choose the odd one out.',
    answers:[
      { text: 'Kumaranasan', correct: false },
      { text: 'Cherusseri', correct: true },
      { text: 'Vallathol', correct: false },
      { text: 'Ulloor', correct: false }
    ]
  },
  {
    question: 'Who is PN Panicker"s father?',
    answers:[
      { text: 'Govinda Panicker', correct: false },
      { text: 'Hariram Panicker', correct: false },
      { text: ' Hariram Pillai', correct: false },
      { text: 'Govinda Pillai', correct: true }
    ]
  },
  {
    question: 'What is the full name of PN Panicker?',
    answers:[
      { text: 'Puthuvayil Narayana Panicker', correct: true },
      { text: ' Parikar Narayana Panicker', correct: false },
      { text: 'Prithvi Nara Panicker', correct: false },
      { text: 'Prithvi Narayana Panicker', correct: false }
    ]
  }

]