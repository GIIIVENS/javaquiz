

const start = document.getElementById('start-btn')
const welcome = document.getElementsById('#pto')
const options = document.getElementById('question-box')
let question = document.getElementById('#questions')
let answer = document.getElementById('#answers-btn') 
let   questionOrdr, questionUserIsOn





start.addEventListener('click',quizBegin)

// function textToggle (){ 
//     var

// }s 

function quizBegin() {
    console.log('quizStart')
    start.classList.add('hide')
    welcome.classList.add('hide')
    options.classList.remove('hide')
    questionOrdr = questions.sort(()=> Math.random)
    questionUserIsOn = 0
    nextQuestion ()
}   
// funtion that begins the quiz after the start btn is selected 




function nextQuestion () { 
    presentQuestion(questionOrdr[questionUserIsOn]) 

}
// function that 
 
function presentQuestion (question) {
    question. questions.question 
    question.answer.array.forEach(answer=> {
        const answerbutton = document.createElement('buttn')
        buttn.innerText= answer.Text
        
    });
}

const quizquestion = [
    { question: 'Which of the following is NOT a JavaScript data type? ',
        answers: [
            { Text: 'object', correct: false},
            { Text: 'boolean', correct: false},
            { Text: 'cascade', correct: true},
            { Text: 'string', correct: false},

        ]
    } ,

    {
        question: 'Is JavaScript case sensitive?',
        answers: [
            { Text: 'no', correct: false},
            { Text: 'yes', correct: true},
            { Text: 'sometimes', correct: false},
            { Text: 'only on tuesdays', correct: false},

        ]
        
    },
    
    
      {
        question: 'Which of the following is NOT a way JavaScript code can correspond with an HTML file?',
        answers: [
            { Text: 'inline', correct: false},
            { Text: 'outline', correct: true},
            { Text: 'internal', correct: false},
            { Text: 'external', correct: false},

        ]
        
    },

    {
        question: ' What kind of storage in JavaScript gets cleared when the page session ends?',
        answers: [
            { Text: 'browser storage', correct: false},
            { Text: 'local storage', correct: false},
            { Text: 'script storage', correct: false},
            { Text: 'session storage', correct: true},

        ]
        
    },

    {
        question: 'In JavaScript what does DOM stand for? ',
        answers: [
            { Text: 'Document Object Model', correct: true},
            { Text: 'Direct Object Management', correct: false},
            { Text: 'Declare Object Material', correct: false},
            { Text: 'Document Object Metadata ', correct: false},

        ]
        
    },

    {
        question: 'which of the following is NOT a javascript data type ',
        answers: [
            { Text: 'object', correct: false},
            { Text: 'boolean', correct: false},
            { Text: 'cascade', correct: true},
            { Text: 'string', correct: false},

        ]
        
    },

    {
        questions: 'where should an external Javasript page be linked in the HTML? ',
        answers: [
            { Text: 'at the top of the document', correct: false},
            { Text: 'at the bottom of the document', correct: true},
            { Text: 'anywhere in the document', correct: false},
            { Text: 'in a media query', correct: false},

        ]
        
    }



]



 
// function tah makes new question appear after the  previous question has been answered 


