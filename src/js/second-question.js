const btnVerifyResponse = document.getElementById("btn-verify-response");


btnVerifyResponse.addEventListener("click", () => {
    let valueInput = document.getElementsByTagName("input")[0].value;

    if (valueInput == 3) {
        hiddenText[1].style.display = "block";
        hiddenText[1].style.color = "#005500";

        hiddenText[1].textContent = "Resposta certa!";

        btnVerifyResponse.style.display = "none";
        document.getElementsByTagName("input")[0].style.display = "none";

    } else if (valueInput >= 1) {
        hiddenText[1].textContent = "Resposta errada!";
        hiddenText[1].style.color = "#be0202";

        valueInput.style.display = "none";
    } else {
        hiddenText[1].textContent = "Digite um número no campo abaixo";
    }
})