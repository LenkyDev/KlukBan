window.addEventListener("load", () => {
    document.querySelector(".app-loader").classList.add("remove");
    document.querySelector("main").classList.add("loaded");
});

let btn = document.querySelector(".card button");

if (window.matchMedia("screen and (max-width: 1000px) and (max-height: 915px)").matches) {
    btn = document.querySelector(".card-mobile button");
    btn.addEventListener("click", rippleEffect, false);
    document.querySelector(".card").remove();
} else {
    document.querySelector(".card-mobile").remove();
}
btn.addEventListener("click", click, false);

function claim() {
    setTimeout(() => {
        btn.innerText = "Claimed";
        btn.style.cursor = "not-allowed";
        setTimeout(() => {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }, 1000);
    }, 1500);
};
async function click() {
    btn.innerText = "";
    btn.style.background = "#373a41";
    await btn.insertAdjacentHTML("beforeend", `<div class="loader"><span class="dot" style="--d:1;"></span><span class="dot" style="--d:2;"></span><span class="dot" style="--d:3;"></span></div>`);
    btn.style.cursor = "wait";
    btn.classList.add("disabled");
    claim();
    btn.removeEventListener("click", click, false);
    rippleEffect()
};
function rippleEffect(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - (button.offsetLeft + radius)}px`
    circle.style.top = `${event.pageY - (button.offsetTop + radius)}px`
    circle.classList.add("ripple");

    button.appendChild(circle);

    circle.addEventListener("animationend", () => {
        circle.remove();
    });
};