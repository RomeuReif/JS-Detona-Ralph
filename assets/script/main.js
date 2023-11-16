const state = {
    view: {
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
    },
    values: {
        hitPosition: 0,
        gameSpeed: 1000,
        result: 0,
        currentTime: 60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    },
};

function soundGame(sound){
    let audio = new Audio(`./assets/audios${sound}.m4a`);
    audio.volume = 0.3;
    audio.play();
}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game over! Your result is" + state.values.result);
    }
}

function squareRandom(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let numberRandom = Math.floor(Math.random() * 10);
    let squareRandom = state.view.squares[numberRandom];
    squareRandom.classList.add("enemy");
    state.values.hitPosition = squareRandom.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                soundGame("hit");
            }
        });
    });
}

function initialize(){
    addListenerHitBox();
}

initialize();