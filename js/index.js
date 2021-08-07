const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const sendButton = document.querySelector(".comment-form__button");

getComments();

sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (nameField.value == "") {
        alert("Введите имя!");
        return;
    }
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailField.value == "") {
        alert("Введите email!");
        return;
    } else if (!pattern.test(emailField.value)) {
        alert("Неправильный email!");
        return;
    }
    if (messageField.value == "") {
        alert("Введите комментарий!");
        return;
    }

    let xhr = new XMLHttpRequest();
    let formData = new FormData();
    formData.append("name", nameField.value);
    formData.append("email", emailField.value);
    formData.append("message", messageField.value);
    xhr.open("POST", "../processingComment.php");
    xhr.send(formData);

    xhr.onload = () => {
        console.log(xhr.response);
        getComments();
    }

    xhr.onerror = () => {
        let response = xhr.response;
        console.log('Что-то пошло не так');
        console.log(response);
        return false;
    }
});