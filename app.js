const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const button = document.querySelector('.icon-dice-bg');

function onClick(){

    fetch ("https://api.adviceslip.com/advice", {cache: "no-store"})
    .then (response => response.json())
    .then (data => {
        adviceId.innerText = 'advice #' + data['slip']['id'];
        advice.innerText = `"${data['slip']['advice']}"`
    });

}

button.addEventListener('click', onClick);

onClick();