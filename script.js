function createDecoration() {

    const decorations = [
        "♫", "♪", "♬", "♡", "✦", "✧", "❀"
    ];

    const item = document.createElement("div");

    item.className = "floating";

    item.innerHTML =
        decorations[Math.floor(Math.random() * decorations.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize =
        (15 + Math.random() * 25) + "px";

    item.style.color =
        Math.random() > 0.5 ? "#d5aaff" : "#f0dfff";

    item.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);
}

setInterval(createDecoration, 450);


const button = document.getElementById("surpriseButton");

const message = document.getElementById("surpriseMessage");

button.addEventListener("click", function() {

    message.classList.toggle("hidden");

    if (message.classList.contains("hidden")) {
        button.innerHTML = "Play Your Surprise ♡";
    } else {
        button.innerHTML = "A Little Message For You ♡";
    }

});
