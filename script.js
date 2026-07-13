/*=====================================================
LEGRON AI WEBSITE
SCRIPT.JS - PART 1
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      SPLASH SCREEN
    =========================================*/

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }, 3000);

    }

    /*=========================================
      HERO FADE ANIMATION
    =========================================*/

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(60px)";

        setTimeout(() => {

            hero.style.transition = "1.2s ease";

            hero.style.opacity = "1";
            hero.style.transform = "translateY(0px)";

        }, 3200);

    }

    /*=========================================
      NAVBAR SCROLL EFFECT
    =========================================*/

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (!nav) return;

        if (window.scrollY > 40) {

            nav.style.background = "rgba(5,8,22,.90)";
            nav.style.backdropFilter = "blur(20px)";
            nav.style.boxShadow =
                "0 10px 35px rgba(25,200,255,.25)";

        } else {

            nav.style.background = "rgba(255,255,255,.05)";
            nav.style.boxShadow = "none";

        }

    });

    /*=========================================
      FEATURE CARD ANIMATION
    =========================================*/

    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(80px)";
        card.style.transition = ".8s ease";

    });

    function revealCards() {

        const trigger = window.innerHeight * 0.85;

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if (top < trigger) {

                card.style.opacity = "1";
                card.style.transform = "translateY(0px)";

            }

        });

    }

    window.addEventListener("scroll", revealCards);

    revealCards();

    /*=========================================
      COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".stats h2");

    counters.forEach(counter => {

        const number = parseInt(counter.innerText);

        if (isNaN(number)) return;

        let count = 0;

        const speed = number / 80;

        function updateCounter() {

            if (count < number) {

                count += speed;

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = number + "+";

            }

        }

        updateCounter();

    });

});
/*=====================================================
LEGRON AI WEBSITE
SCRIPT.JS - PART 2
======================================================*/

/*=========================================
MOUSE GLOW EFFECT
=========================================*/

const glow = document.createElement("div");

glow.className = "mouse-glow";

glow.style.position = "fixed";
glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "99999";
glow.style.background = "#19C8FF";
glow.style.boxShadow =
    "0 0 25px #19C8FF, 0 0 60px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 9) + "px";
    glow.style.top = (e.clientY - 9) + "px";

});


/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn1,.btn2,.nav-btn,.liquid-btn")
.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.position = "absolute";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,.35)";

        ripple.style.transform = "scale(0)";

        ripple.style.animation = "ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=========================================
FLOATING LOGO
=========================================*/

const logo = document.querySelector(".logo img");

if (logo) {

    setInterval(() => {

        logo.style.transition = ".7s";

        logo.style.transform = "translateY(-6px)";

        setTimeout(() => {

            logo.style.transform = "translateY(0px)";

        }, 700);

    }, 1600);

}


/*=========================================
PARALLAX BACKGROUND
=========================================*/

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    if(circle1){

        circle1.style.transform =
            `translate(${x * 40}px,${y * 40}px)`;

    }

    if(circle2){

        circle2.style.transform =
            `translate(${-x * 35}px,${-y * 35}px)`;

    }

    if(circle3){

        circle3.style.transform =
            `translate(${x * 20}px,${-y * 20}px)`;

    }

});


/*=========================================
HERO TYPING EFFECT
=========================================*/

const typingText = document.querySelector(".hero-left h4");

if (typingText) {

    const original = typingText.innerText;

    typingText.innerHTML = "";

    let index = 0;

    function typeWriter() {

        if (index < original.length) {

            typingText.innerHTML += original.charAt(index);

            index++;

            setTimeout(typeWriter, 80);

        }

    }

    typeWriter();

}


/*=========================================
GLASS CARD HOVER EFFECT
=========================================*/

const glassCard = document.querySelector(".glass-card");

if(glassCard){

    glassCard.addEventListener("mousemove",(e)=>{

        const rect = glassCard.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        glassCard.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(25,200,255,.18),
        rgba(255,255,255,.06))`;

    });

    glassCard.addEventListener("mouseleave",()=>{

        glassCard.style.background =
        "rgba(255,255,255,.06)";

    });

}/*=====================================================
LEGRON AI WEBSITE
SCRIPT.JS - PART 3
======================================================*/

/*=========================================
START BUTTON TRANSITION
=========================================*/

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.style.transition =
            "all 0.8s ease";

        document.body.style.opacity = "0";

        document.body.style.transform =
            "scale(1.08)";

        setTimeout(() => {

            window.location.href = "problem.html";

        }, 800);

    });

}

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "999999";
progressBar.style.background =
"linear-gradient(90deg,#19C8FF,#7A4DFF)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
FEATURE CARD GLOW
=========================================*/

const featureCards =
document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 40px rgba(25,200,255,.45),\
         0 0 90px rgba(122,77,255,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

/*=========================================
BUTTON HOVER GLOW
=========================================*/

document.querySelectorAll(".btn1,.btn2,.liquid-btn")
.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".4s";

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

/*=========================================
FLOATING BACKGROUND
=========================================*/

const circles =
document.querySelectorAll(".bg-circle");

setInterval(() => {

    circles.forEach((circle,index)=>{

        const x =
        Math.sin(Date.now()/2000+index)*15;

        const y =
        Math.cos(Date.now()/1800+index)*15;

        circle.style.transform =
        `translate(${x}px,${y}px)`;

    });

},30);

/*=========================================
SMOOTH FADE BETWEEN PAGES
=========================================*/

window.addEventListener("pageshow",()=>{

    document.body.style.opacity="1";

    document.body.style.transform="scale(1)";

});

/*=========================================
LOG MESSAGE
=========================================*/

console.log("%cLEGRON AI Website Loaded",
"color:#19C8FF;font-size:18px;font-weight:bold;");

console.log("%cInnovate Beyond Reality",
"color:#7A4DFF;font-size:14px;");

/*=========================================
END
=========================================*/