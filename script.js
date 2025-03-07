const audio = new Audio();
audio.src = "./happy-birthday-to-you.mp3";
// Function to create floating balloons
function createBalloons() {
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.background = hsl(${ Math.random() * 360 }, 100 %, 70 %);
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(balloon);
    }
}

// Create new balloons every second
setInterval(createBalloons, 1000);

// Open a surprise image after 3 seconds
setTimeout(() => {
    window.open("https://i.ibb.co.com/B29QRqQz/Purple-cute-cat-Birthday-Card.png "_blank");
}, 3000);