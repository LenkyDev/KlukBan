const btn = document.querySelector(".card button");
btn.addEventListener("click", click, false);

function claim() {
    setTimeout(() => {
        btn.innerText = "Claimed";
        btn.style.cursor = "not-allowed";
        setTimeout(() => {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 1000);
    }, 1000);
};
async function click() {
    btn.innerText = "";
    btn.style.background = "#373a41";
    btn.style.cursor = "wait";
    btn.classList.add("disabled");
    claim();
    btn.removeEventListener("click", click, false);
    await btn.insertAdjacentHTML("beforeend", `<div class="loader"><span class="dot" style="--d:1;"></span><span class="dot" style="--d:2;"></span><span class="dot" style="--d:3;"></span></div>`)
};