document.addEventListener("DOMContentLoaded", () => {
    function rain() {
        let cloud = document.querySelector(".cloud");
        let e = document.createElement("div");

        let top = 0;
        let left = Math.floor(Math.random() * 310);
        let width = Math.random() * 5;
        let height = Math.random() * 50;
        let duration = Math.random() * 0.5;

        e.classList.add("drop");

        e.style.top = "80px";
        e.style.left = left + "px";
        e.style.width = width + 0.5 + "px";
        e.style.height = height + "px";
        e.style.animationDuration = 1 + duration + "s";

        cloud.appendChild(e);

        setTimeout(function () {
            cloud.removeChild(e);
        }, 2000);
    }

    setInterval(function () {
        rain();
    }, 20);
});
