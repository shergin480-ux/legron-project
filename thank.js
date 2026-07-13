/*==================================================
        LEGRON THANK YOU PAGE
        thank.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*==============================
PAGE FADE IN
==============================*/

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

setTimeout(() => {
    document.body.style.opacity = "1";
}, 200);

/*==============================
NAVBAR SCROLL EFFECT
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(5,8,22,.92)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow =
        "0 10px 30px rgba(25,200,255,.25)";

    } else {

        header.style.background = "rgba(5,8,22,.65)";
        header.style.boxShadow = "none";

    }

});

/*==============================
THANK CARD FLOATING
==============================*/

const card = document.querySelector(".thank-card");

let move = 0;

setInterval(() => {

    move = move === 0 ? -10 : 0;

    card.style.transition = "1.8s ease-in-out";
    card.style.transform = `translateY(${move}px)`;

},1800);

/*==============================
CHECK ICON ROTATE
==============================*/

const check = document.querySelector(".check-circle");

setInterval(()=>{

check.style.transform="scale(1.1) rotate(10deg)";

setTimeout(()=>{

check.style.transform="scale(1) rotate(0deg)";

},800);

},2200);

/*==============================
BUTTON HOVER GLOW
==============================*/

document.querySelectorAll(".glass-btn,.nav-page,.home-btn")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow=
"0 0 35px #19C8FF,0 0 70px #7A4DFF";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

/*==============================
SMOOTH PAGE TRANSITION
==============================*/

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(href && !href.startsWith("#")){

link.addEventListener("click",function(e){

e.preventDefault();

document.body.style.transition=".7s";
document.body.style.opacity="0";
document.body.style.transform="scale(1.05)";

setTimeout(()=>{

window.location.href=href;

},700);

});

}

});

/*==============================
MOUSE GLOW
==============================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.zIndex="99999";

glow.style.background="#19C8FF";

glow.style.boxShadow=
"0 0 30px #19C8FF,0 0 60px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});

/*==============================
BACKGROUND PARALLAX
==============================*/

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

const c1=document.querySelector(".circle1");
const c2=document.querySelector(".circle2");
const c3=document.querySelector(".circle3");

if(c1)
c1.style.transform=
`translate(${x*30}px,${y*30}px)`;

if(c2)
c2.style.transform=
`translate(${-x*30}px,${-y*30}px)`;

if(c3)
c3.style.transform=
`translate(${x*15}px,${-y*15}px)`;

});

/*==============================
TYPING EFFECT
==============================*/

const title=document.querySelector(".thank-card h5");

if(title){

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

}

/*==============================
CONSOLE MESSAGE
==============================*/

console.log("%c✔ LEGRON Thank You Page Loaded",
"color:#19C8FF;font-size:18px;font-weight:bold");

console.log("%cInnovate Beyond Reality",
"color:#7A4DFF;font-size:14px");

});