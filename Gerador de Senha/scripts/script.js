let scrollElement = document.querySelector("#scroll");
let buttonElement = document.querySelector(".button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector(".boxSenha");

let hideContainer = document.querySelector(".container-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
let newPassword = "";

sizePassword.innerHTML = scrollElement.value;

scrollElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

buttonElement.addEventListener('click', () => {
    let pass = "";
    for (let i = 0, n = charset.length; i < scrollElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    hideContainer.classList.remove("hide");
    passwordElement.innerHTML = pass;
    newPassword = pass;
})

async function copyPassword(){
    await navigator.clipboard.writeText(newPassword);
    alert("Senha Copiada com Sucesso!");
}