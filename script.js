let music;

let currentPage = 1;

const totalPages = 10;

window.onload = function () {

    music = document.getElementById("bgMusic");

    const noBtn = document.getElementById("noBtn");

    if (noBtn) {

        noBtn.addEventListener("mouseover", moveNoButton);
        noBtn.addEventListener("click", moveNoButton);

    }

    updateProgress();

};

// -----------------------------

// Navigation

// -----------------------------

function nextPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

    currentPage++;

    updateProgress();

}

function startExperience() {

    music.play().catch(() => {});

    nextPage("page2");

}

function nextQuestion() {

    if (currentPage === 2) {

        nextPage("page3");

    }

    else if (currentPage === 3) {

        nextPage("page4");

    }

    else if (currentPage === 4) {

        nextPage("page5");

    }

}

function showPhoto() {

    nextPage("page6");

    typeMessage();

}

function showFinalPage() {

    nextPage("page10");

    launchConfetti();

}

// -----------------------------

// Progress Bar

// -----------------------------

function updateProgress() {

    const progress =

        (currentPage / totalPages) * 100;

    document.getElementById("progressBar").style.width =

        progress + "%";

}

// -----------------------------

// Music

// -----------------------------

function toggleMusic() {

    if (music.paused) {

        music.play();

    }

    else {

        music.pause();

    }

}

// -----------------------------

// Typing Effect

// -----------------------------

function typeMessage() {

    const text =

        "Every conversation with you feels easy, genuine, and special. I hope this little quiz brought a smile to your face. ❤️";

    let i = 0;

    const target =

        document.getElementById("typing");

    target.innerHTML = "";

    const interval = setInterval(() => {

        target.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(interval);

        }

    }, 45);

}

// -----------------------------

// Running NO Button

// -----------------------------

function moveNoButton() {

    const btn =

        document.getElementById("noBtn");

    btn.style.position = "absolute";

    btn.style.left =

        Math.random() * 75 + "%";

    btn.style.top =

        Math.random() * 75 + "%";

}

// -----------------------------

// Floating Hearts

// -----------------------------

setInterval(() => {

    const heart =

        document.createElement("div");

    heart.className =

        "heart";

    const hearts =

        ["❤️", "💖", "💕", "💗", "🌸"];

    heart.innerHTML =

        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =

        Math.random() * 100 + "vw";

    heart.style.fontSize =

        (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =

        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 250);

// -----------------------------

// Sparkles

// -----------------------------

setInterval(() => {

    const sparkle =

        document.createElement("div");

    sparkle.className =

        "sparkle";

    sparkle.innerHTML =

        "✨";

    sparkle.style.left =

        Math.random() * 100 + "vw";

    sparkle.style.top =

        Math.random() * 100 + "vh";

    sparkle.style.fontSize =

        (12 + Math.random() * 16) + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}, 500);

// -----------------------------

// Confetti

// -----------------------------

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =

            document.createElement("div");

        confetti.innerHTML =

            ["🎉", "🎊", "💖", "🌸", "✨"][Math.floor(Math.random() * 5)];

        confetti.style.position =

            "fixed";

        confetti.style.left =

            Math.random() * 100 + "vw";

        confetti.style.top =

            "-20px";

        confetti.style.fontSize =

            (16 + Math.random() * 20) + "px";

        confetti.style.pointerEvents =

            "none";

        confetti.style.transition =

            "all 4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top =

                "110vh";

            confetti.style.transform =

                "rotate(720deg)";

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}