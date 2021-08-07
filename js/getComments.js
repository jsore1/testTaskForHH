function getComments() {
    const containerForComments = document.querySelector(".show-comment").children[0].children[1];
    containerForComments.innerHTML = "";
    let theme
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../getComments.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    xhr.onload = () => {
        let response = xhr.response;
        let dataArray = JSON.parse(response);
        for (let i = 0; i < dataArray.length; i++) {
            theme = (i % 2 == 0) ? "grey" : "green";
            containerForComments.insertAdjacentHTML("beforeend", `
            <div class="comment-card comment-card_theme_${theme} col-md-6 col-lg-4">
                <div class="comment-card__header">
                    <h3 class="comment-card__title">${dataArray[i].name}</h3>
                </div>
                <div class="comment-card__body">
                    <p class="comment-card__email">${dataArray[i].email}</p>
                    <p class="comment-card__message">${dataArray[i].message}</p>
                </div>
            </div>
            `);
        }
    }

    xhr.onerror = () => {
        let response = xhr.response;
        console.log('Что-то пошло не так');
        console.log(response);
        return false;
    }
}