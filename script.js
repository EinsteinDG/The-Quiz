let btnStQuiz = ("#button1"); console.log(btnStQuiz);
document.getElementById(btnStQuiz).addEventListener("click",);

ProgressCountdown(60, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`Page has started: ${value}.`));

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);