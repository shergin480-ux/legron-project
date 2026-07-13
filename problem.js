/*==================================================
            LEGRON PROBLEM PAGE
            problem.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*==============================
PAGE FADE
==============================*/

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

setTimeout(() => {
    document.body.style.opacity = "1";
}, 200);

/*==============================
NAVBAR EFFECT
==============================*/

const nav = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,8,22,.95)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.boxShadow =
        "0 10px 35px rgba(25,200,255,.25)";

    } else {

        nav.style.background = "rgba(5,8,22,.65)";
        nav.style.boxShadow = "none";

    }

});

/*==============================
SCROLL REVEAL
==============================*/

const cards = document.querySelectorAll(".problem-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s ease";

observer.observe(card);

});

/*==============================
3D CARD TILT
==============================*/

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/15;
const rotateY=(rect.width/2-x)/15;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

/*==============================
BUTTON GLOW
==============================*/

document.querySelectorAll(".demo-btn,.nav-page")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow=
"0 0 35px #19C8FF,0 0 60px #7A4DFF";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

/*==============================
PAGE TRANSITION
==============================*/

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(href && !href.startsWith("#")){

link.addEventListener("click",function(e){

e.preventDefault();

document.body.style.transition=".6s";
document.body.style.opacity="0";
document.body.style.transform="scale(1.05)";

setTimeout(()=>{

window.location.href=href;

},600);

});

}

});

/*==============================
FLOATING BACKGROUND
==============================*/

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

const c1=document.querySelector(".circle1");
const c2=document.querySelector(".circle2");
const c3=document.querySelector(".circle3");

if(c1)
c1.style.transform=`translate(${x*35}px,${y*35}px)`;

if(c2)
c2.style.transform=`translate(${-x*35}px,${-y*35}px)`;

if(c3)
c3.style.transform=`translate(${x*20}px,${-y*20}px)`;

});

/*==============================
TITLE TYPING EFFECT
==============================*/

const title=document.querySelector(".title h5");

if(title){

const text=title.innerText;

title.innerHTML="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

}

/*==============================
MOUSE GLOW
==============================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="#19C8FF";
glow.style.pointerEvents="none";
glow.style.zIndex="99999";

glow.style.boxShadow=
"0 0 25px #19C8FF,0 0 50px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});

/*==============================
CONSOLE
==============================*/

console.log("LEGRON Problem Page Loaded");

console.log("Innovate Beyond Reality");

});