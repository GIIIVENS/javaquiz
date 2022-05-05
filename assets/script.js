
// variables 

const start = document.getElementById('start-btn')

const options = document.getElementById('question-box')
const questionTextEl = document.getElementById('question-text')
// const userResult = document.getElementById('')
// const restart = document.getElementById('')
let welcome = document.getElementById('welcome')
let answer = document.getElementById('#answers-btn')
let questionOrdr, questionUserIsOn
let score = 0
let userCurrentQuestion = {}
let correctAnswer = true
let questionNumber = 0
// buttons
start.addEventListener('click', quizBegin)
// answer.addEventListener('click', answerbtn)


const quizQuestions = [
    {
        question: 'Which of the following is NOT a JavaScript data type? ',
        answers: [
            {
                a: 'object',
                b: 'boolean',
                c: 'cascade',
                c: 'string'
            },
            { correct: "C" }

        ]
    },

    {
        question: 'Is JavaScript case sensitive?',
        answers: [
            {
                a: 'no',
                b: 'yes',
                c: 'sometimes',
                d: 'only on tuesdays',
            },
            { correct: "b" }
        ]

    },


    {
        question: 'Which of the following is NOT a way JavaScript code can correspond with an HTML file?',
        answers: [
            {
                a: 'inline',
                b: 'outline',
                c: 'internal',
                d: 'external'
            },
            { correct: "b" }
        ]

    },

    {
        question: ' What kind of storage in JavaScript gets cleared when the page session ends?',
        answers: [
            {
                a: 'browser storage',
                b: 'local storage',
                c: 'script storage',
                d: 'session storage'
            },
            { correct: "d" }
        ]

    },

    {
        question: 'In JavaScript what does DOM stand for? ',
        answers: [
            {
                a: 'Document Object Model',
                b: 'Direct Object Management',
                c: 'Declare Object Material',
                d: 'Document Object Metadata '
            },
            { correct: "a" }
        ]

    },

    {
        question: 'which of the following is NOT a javascript data type ',
        answers: [
            {
                a: 'object',
                b: 'boolean',
                c: 'cascade',
                d: 'string'
            },
            { correct: "c" }
        ]

    },

    {
        questions: 'where should an external Javasript page be linked in the HTML? ',
        answers: [
            {
                a: 'at the top of the document',
                b: 'at the bottom of the document',
                c: 'anywhere in the document',
                d: 'in a media query'
            },
            { correct: "b" }
        ]

    }
];




function instructionToggle() {
    var welcome = document.getElementById('welcome')
    if (welcome.style.display === "block") {
        welcome.style.display = "none";
    } else {
        welcome.style.display = 'block';
    }

}








// function textToggle text off once one clicks start quiz begins





function quizBegin() {
    console.log('quizStart')
    start.classList.add('hide')
    welcome.classList.add('hide')
    options.classList.remove('hide')
    // nextQuestion()
    loadQuestion()

}


function loadQuestion(){
 const currentQuestion = quizQuestions[0]
console.log (currentQuestion.question)
console.log (questionTextEl)
questionTextEl.innerText = currentQuestion.question
}





nextQuestion = () => {
    if (totalOfQuestions.length === 0 || scoreTotal > full) {
        localStorage.setItem('topScores', score)

        return window.location.assign('end/.html')
    }

    scoreTotal++
    progressText.innerTex = 'Question ${scoreTotal} of ${scoreTotal}'
    Math.floor(Math.random() * totalOfQuestions.length)
    userCurrentQuestion = totalOfQuestions[questionsIndex]
    question.innerText = userCurrentQuestion.quizQuestions


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = userCurrentQuestion['choice' + number]

        // availbleQuestions.questionsIndex, 1

        acceptingAnswers = true






    })
}






//  questionOrdr = questions.sort(()=> Math.random)
// funtion that begins the quiz after the start btn is selected 
function nextQuestion() {
    currentQuestion = 0;
    questionText.innerhtml = questions[currentQuestion].question;



}

function answerbtn() {






}
// // function that 

function presentQuestion(question) {
    question.answer.array.forEach(answer => {
        const answerbutton = document.createElement('buttn')
        buttn.innerText = answer.Text
    })
}
//    
// 



// quiz questions and answers



function submitResults() {

}

function seeResults() {

}

// function tah makes new question appear after the  previous question has been answered 

const scoreTotal = 35
const totalOfQuestions = 7

