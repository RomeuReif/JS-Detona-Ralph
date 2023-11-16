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
}