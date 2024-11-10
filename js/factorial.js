const factorialDiv = document.querySelector("#factorial .results");
const factorialInput = document.getElementById("factorial-input");
const factorialButton = document.getElementById("factorial-button");
const factorialReset = document.getElementById("factorial-reset");

const now = new Date();
factorialButton.addEventListener("click", () => {
    let value = parseInt(factorialInput.value);
    factorialDiv.style.display = "block";
    setTimeout(()=> {
        factorialDiv.style.height = "120px";
    }, 1);

    let message;
    if (isNaN(value) || value < 0) {
        message = document.createElement("p");
        message.classList.add("message", "error", "text-danger","mt-2");
        factorialDiv.appendChild(message);

        document.querySelector(".error").textContent = "Please enter a positive integer.";
        factorialInput.focus();
    } else {
        message = document.createElement("p");
        message.innerHTML = `<span class="info-element">${now.getMinutes()}
        <span class="info-element-item">${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</span>
        <i class="ri-history-fill"></i></span> Result: <b>${factorial(value)}</b>`;
        message.classList.add("message", "my-2");
        
        factorialDiv.querySelectorAll(".error").forEach(item => item.remove());

        factorialDiv.appendChild(message);
    }
});

factorialReset.addEventListener("click", () => {
    factorialDiv.innerHTML = "";
});

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}