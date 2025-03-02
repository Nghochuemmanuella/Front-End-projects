const quizData = [
    {
        question: "which keyword is used to declear a variable in javascript",
        options: ["variable", "var","let","b and c"],
        answer: "let"
    },

    {
        question: "what does the if statement do?",
        options: ["Execute a block of code if a condition is false", "execute a block of code if a condition is true", 
            "repeat a block of code","defines a function"],
        answer: "repeat a block of code"
    },

    {
        question: "what is the purpose of function in javaScript?",
        options: ["to store data", "to style Html elements", "to execute a block of code", "to create a loop"],
        answer: "to execute a block of code"
    }
];

let currentQuestion = 0;
let score = 0;

     function loadQuestion() {
        const questionElement = document.getElementById("question");
        const choiceElement = document.getElementById("options");

        questionElement.textContent = questions[currentQuestion].question;

        choiceElement.innerHTML = "";
        for (let i = 0; i < questions[currentQuestion].choice.length; i++)
        {
            const button = document.createElement("button");
            button.textContent = questions[currentQuestion].choice[i];
            button.onclick = function() {
                checkAswear(i);
            };
        choiceElement.appendChild(button);
            
        }
     }
     function checkAswear(choiceIndex) {
        const resultElement = document.getElementById("result");

        if (choiceIndex === questions[currentQuestion].answer){
            score++;
            resultElement.textContent = "correct";
        }

        currentQuestion++;

        if(currentQuestion < qestions.length) {
            loadQuestion();
        }else{
            resultElement.textContent = `Quiz completed. your score: ${score}/${questions.length}`;
        }
     }
         
     loadQuestion();
