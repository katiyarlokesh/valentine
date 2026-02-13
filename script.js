function yesClicked() {
    document.getElementById("loveMusic").play();

    document.body.innerHTML = `
        <div style="text-align:center; margin-top:150px; color:#ff0066;">
            <h1>She Said YESSS!!! 💖💖💖</h1>
            <h2>Love successfully deployed 🚀</h2>
            <h3>You just made Lokesh the happiest husband-to-be 😍</h3>
        </div>
    `;

    createHearts();
}

function moveButton() {
    let button = document.getElementById("noBtn");
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
}

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = "30px";
        heart.style.animation = "float 3s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 300);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-800px); opacity: 0; }
}`;
document.head.appendChild(style);
