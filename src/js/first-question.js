// Elemento pego pelo id
const boxBtnFirstQuestion = document.getElementById("box-btn-firs-question");


// Elementos pegos pelo nome da classe
const btnFirstQuestion = document.getElementsByClassName("btn-question-1");
const hiddenText = document.getElementsByClassName("hidden-text");
const btnTryAgain = document.getElementsByClassName("btn-try-again");


let userResponse;


btnFirstQuestion[0].addEventListener("click", () => {
    userResponse = 0;

    responseVerification();
})
btnFirstQuestion[1].addEventListener("click", () => {
    userResponse = 1;

    responseVerification();
})
btnFirstQuestion[2].addEventListener("click", () => {
    userResponse = 2;

    responseVerification();
})
btnFirstQuestion[3].addEventListener("click", () => {
    userResponse = 3;

    responseVerification();
})


btnTryAgain[0].addEventListener("click", () => {
    showBtnFirstQuestion();
})


function responseVerification() {
    hiddenText[0].style.display = "block";

    if (userResponse == 0) {
        hiddenText[0].textContent = "Resposta certa!";
        hiddenText[0].style.color = "#005500";

    } else if (userResponse == 1) {
        firstResponseWrong();

    } else if (userResponse == 2) {
        firstResponseWrong();

    } else if (userResponse == 3) {
        firstResponseWrong();
    }

    hideBtnFirstQuestion();
}


// Chamada quando o usuario seleciona uma resposta errada para a primeira pergunta
function firstResponseWrong() {
    hiddenText[0].textContent = "Resposta errada!";
    hiddenText[0].style.color = "#be0202";

    btnTryAgain[0].style.display = "block";
}


// Esconde os botoes de resposta da primeira pergunta
function hideBtnFirstQuestion() {
    btnFirstQuestion[0].style.display = "none";
    btnFirstQuestion[1].style.display = "none";
    btnFirstQuestion[2].style.display = "none";
    btnFirstQuestion[3].style.display = "none";
}


// Mostra os botoes de resposta da primeira pergunta
function showBtnFirstQuestion() {
    btnFirstQuestion[0].style.display = "block";
    btnFirstQuestion[1].style.display = "block";
    btnFirstQuestion[2].style.display = "block";
    btnFirstQuestion[3].style.display = "block";

    boxBtnFirstQuestion.style.display = "flex";
    btnTryAgain[0].style.display = "none";
    hiddenText[0].style.display = "none";
}