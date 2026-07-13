/*====================================================
        LEGRON SERVICES PAGE
        services.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      PAGE FADE IN
    =========================*/

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity 1.2s ease";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 200);


    /*=========================
      NAVBAR SCROLL EFFECT
    =========================*/

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            nav.style.background = "rgba(5,8,22,.92)";
            nav.style.backdropFilter = "blur(25px)";
            nav.style.boxShadow =
                "0 12px 35px rgba(25,200,255,.25)";

        } else {

            nav.style.background = "rgba(255,255,255,.06)";
            nav.style.boxShadow = "none";

        }

    });


    /*=========================
      SCROLL REVEAL
    =========================*/

    const cards = document.querySelectorAll(".card,.solution-box");

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

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(80px)";
        card.style.transition = ".8s ease";

    });

    window.addEventListener("scroll", revealCards);

    revealCards();


    /*=========================
      CARD TILT EFFECT
    =========================*/

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateX = (y - rect.height / 2) / 18;

            const rotateY = -(x - rect.width / 2) / 18;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.04)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

        });

    });


    /*=========================
      CTA BUTTON EFFECT
    =========================*/

    const btn = document.querySelector(".cta-btn");

    if (btn) {

        btn.addEventListener("mouseenter", () => {

            btn.style.boxShadow =
                "0 0 35px rgba(122,77,255,.7)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.boxShadow = "none";

        });

    }

});


/*=========================
  FLOATING MOUSE GLOW
=========================*/

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "22px";
glow.style.height = "22px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "99999";
glow.style.background = "#19C8FF";
glow.style.boxShadow =
"0 0 35px #19C8FF,0 0 70px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 11) + "px";
    glow.style.top = (e.clientY - 11) + "px";

});


/*=========================
  PARALLAX BACKGROUND
=========================*/

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    const c1 = document.querySelector(".circle1");
    const c2 = document.querySelector(".circle2");
    const c3 = document.querySelector(".circle3");

    if (c1)
        c1.style.transform =
            `translate(${x * 35}px,${y * 35}px)`;

    if (c2)
        c2.style.transform =
            `translate(${-x * 40}px,${-y * 40}px)`;

    if (c3)
        c3.style.transform =
            `translate(${x * 20}px,${-y * 20}px)`;

});


/*=========================
  FLOATING LOGO
=========================*/

const logo = document.querySelector(".logo img");

if (logo) {

    setInterval(() => {

        logo.style.transition = ".6s ease";
        logo.style.transform = "translateY(-6px)";

        setTimeout(() => {

            logo.style.transform = "translateY(0px)";

        }, 600);

    }, 1500);

}


/*=========================
  HERO TYPING EFFECT
=========================*/

const title = document.querySelector(".hero h4");

if (title) {

    const text = title.innerText;

    title.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 70);

        }

    }

    typing();

}


/*=========================
  END
=========================*/

console.log("LEGRON Services Loaded Successfully");