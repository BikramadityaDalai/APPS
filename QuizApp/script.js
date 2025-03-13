// Get elements
let back = document.querySelector(".back");
let btn = document.querySelector(".btn");
let submit = document.querySelector("#submit");
let next = document.querySelector("#next");
let quebox = document.getElementById("question");
let optionInputs = document.querySelectorAll(".options");
let answerLabels = document.querySelectorAll("label"); // Get the labels for options

let index = 0;
let right = 0;
let wrong = 0;

// Data for the quiz
const data = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "In which language is memory management provided by JVM?",
        options: ["Java", "C", "C++", "Python"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "Which of the following is not a valid variable name in Python?",
        options: ["_myVar", "myVar2", "2myVar", "my_var"],
        correct: 2
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "In which data structure, elements are added at one end and removed from the other?",
        options: ["Array", "Stack", "Queue", "LinkedList"],
        correct: 2
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    }
];

// Load question
const loadQuestion = () => {
    if (index >= data.length) {
        alert("Quiz Over. Your score: " + right + "/" + data.length);
        return;
    }

    reset();
    const question = data[index];
    quebox.innerText = `${index + 1}) ${question.text}`;
    optionInputs[0].nextElementSibling.innerText = question.options[0];
    optionInputs[1].nextElementSibling.innerText = question.options[1];
    optionInputs[2].nextElementSibling.innerText = question.options[2];
    optionInputs[3].nextElementSibling.innerText = question.options[3];
};

// Get selected answer
const getSelectedAnswer = () => {
    let selectedValue;
    optionInputs.forEach(input => {
        if (input.checked) {
            selectedValue = input.value;
        }
    });
    return selectedValue;
};

// Reset options
const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });

    // Reset background colors for the options
    answerLabels.forEach(label => {
        label.style.backgroundColor = ''; // Clear previous highlights
    });
};

// Submit answer
submit.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === undefined) {
        alert("Please select an option");
        return;
    }

    const correctAnswer = data[index].correct;
    if (parseInt(selectedAnswer) === correctAnswer) {
        right++;
    } else {
        wrong++;
    }

    // Highlight the correct answer and the user's answer
    answerLabels.forEach((label, i) => {
        if (i === correctAnswer) {
            label.style.backgroundColor = 'green'; // Correct answer - green
        }
        if (i == selectedAnswer && i !== correctAnswer) {
            label.style.backgroundColor = 'red'; // Wrong answer - red
        }
    });

    alert(`Your answer is ${parseInt(selectedAnswer) === correctAnswer ? 'Correct' : 'Wrong'}`);
});

// Next question
next.addEventListener("click", () => {
    index++; // Increment index to load the next question
    loadQuestion();
});

// Initialize first question
loadQuestion();
