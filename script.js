let score = 0;
let timeLeft = 30;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const target = document.getElementById("target");

startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 30;

    scoreText.innerText = score;
    timeText.innerText = timeLeft;

    startBtn.style.display = "none";
    target.style.display = "block";

    moveTarget();

    let timer = setInterval(() => {
        timeLeft--;
        timeText.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            target.style.display = "none";
            startBtn.style.display = "block";

            document.body.innerHTML += `
                <h2>🎉 Game Over!</h2>
                <h3>Final Score: ${score}</h3>
            `;
        }
    }, 1000);
}

target.addEventListener("click", () => {
    score++;
    scoreText.innerText = score;
    moveTarget();
});

function moveTarget() {
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 150);

    target.style.left = x + "px";
    target.style.top = y + "px";
}