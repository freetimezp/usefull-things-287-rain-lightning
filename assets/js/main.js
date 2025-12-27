document.addEventListener("DOMContentLoaded", () => {
    const cloud = document.querySelector(".cloud");

    function rain() {
        const drop = document.createElement("div");

        const left = Math.random() * 300;
        const height = Math.random() * 25 + 10;
        const width = Math.random() * 1.5 + 0.5;
        const duration = Math.random() * 0.8 + 0.6;
        const wind = Math.random() * 40 - 20; // left/right drift
        const opacity = Math.random() * 0.5 + 0.3;

        drop.className = "drop";

        drop.style.left = `${left}px`;
        drop.style.height = `${height}px`;
        drop.style.width = `${width}px`;
        drop.style.opacity = opacity;
        drop.style.animationDuration = `${duration}s`;
        drop.style.setProperty("--wind", `${wind}px`);

        cloud.appendChild(drop);

        setTimeout(() => {
            const splash = document.createElement("div");
            splash.className = "splash";
            splash.style.left = drop.style.left;

            cloud.appendChild(splash);
            setTimeout(() => splash.remove(), 300);

            drop.remove();
        }, duration * 1000);
    }

    setInterval(rain, 30);
});

const lightning = document.querySelector(".lightning");

function lightningFlash() {
    const flashes = Math.random() > 0.6 ? 2 : 1; // sometimes double flash
    let delay = 0;

    for (let i = 0; i < flashes; i++) {
        setTimeout(() => {
            lightning.style.opacity = Math.random() * 0.6 + 0.4;

            setTimeout(() => {
                lightning.style.opacity = 0;
            }, Math.random() * 80 + 40);
        }, delay);

        delay += Math.random() * 150 + 80;
    }

    document.body.classList.add("shake");

    setTimeout(() => document.body.classList.remove("shake"), 150);

    function shineLetters() {
        const letters = document.querySelectorAll(".bg-text span");
        const count = Math.floor(Math.random() * 2) + 1; // 1–2 letters

        for (let i = 0; i < count; i++) {
            const letter = letters[Math.floor(Math.random() * letters.length)];
            letter.classList.add("shine");

            setTimeout(() => {
                letter.classList.remove("shine");
            }, Math.random() * 1600 + 900);
        }
    }

    shineLetters();
}

function lightningLoop() {
    lightningFlash();
    setTimeout(lightningLoop, Math.random() * 6000 + 3000);
}

lightningLoop();
