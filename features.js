/*==================================================
        LEGRON FEATURES PAGE
        features.js
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

/*==========================
PAGE FADE
==========================*/

document.body.style.opacity = "0";
document.body.style.transition = "1s";

setTimeout(function(){

document.body.style.opacity="1";

},200);


/*==========================
NAVBAR SCROLL
==========================*/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.style.background="rgba(5,8,22,.92)";
nav.style.backdropFilter="blur(20px)";
nav.style.boxShadow="0 10px 40px rgba(25,200,255,.2)";

}
else{

nav.style.background="rgba(255,255,255,.06)";
nav.style.boxShadow="none";

}

});


/*==========================
SCROLL REVEAL
==========================*/

const cards=document.querySelectorAll(".feature-card,.advanced-card");

function reveal(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

const trigger=window.innerHeight*0.85;

if(top<trigger){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==========================
3D CARD EFFECT
==========================*/

cards.forEach(card=>{

card.addEventListener("mousemove",function(e){

const rect=this.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

this.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",function(){

this.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


/*==========================
CTA BUTTON
==========================*/

const btn=document.querySelector(".cta-btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px #19C8FF";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

}


/*==========================
PAGE BUTTONS
==========================*/

const pages=document.querySelectorAll(".nav-page");

pages.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});

});


/*==========================
MOUSE GLOW
==========================*/

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="18px";

glow.style.height="18px";

glow.style.borderRadius="50%";

glow.style.background="#19C8FF";

glow.style.pointerEvents="none";

glow.style.zIndex="99999";

glow.style.boxShadow="0 0 30px #19C8FF,0 0 60px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove",function(e){

glow.style.left=e.clientX-9+"px";

glow.style.top=e.clientY-9+"px";

});


/*==========================
BACKGROUND PARALLAX
==========================*/

document.addEventListener("mousemove",function(e){

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

const c1=document.querySelector(".circle1");

const c2=document.querySelector(".circle2");

const c3=document.querySelector(".circle3");

if(c1){

c1.style.transform=`translate(${x*35}px,${y*35}px)`;

}

if(c2){

c2.style.transform=`translate(${-x*30}px,${-y*30}px)`;

}

if(c3){

c3.style.transform=`translate(${x*20}px,${-y*20}px)`;

}

});


/*==========================
HERO TYPING
==========================*/

const title=document.querySelector(".hero h4");

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


/*==========================
PAGE TRANSITION
==========================*/

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


/*==========================
FLOATING LOGO
==========================*/

const logo=document.querySelector(".logo img");

if(logo){

setInterval(()=>{

logo.style.transition=".6s";

logo.style.transform="translateY(-6px)";

setTimeout(()=>{

logo.style.transform="translateY(0px)";

},600);

},1800);

}


/*==========================
CONSOLE
==========================*/

console.log("LEGRON FEATURES PAGE LOADED");

console.log("Innovate Beyond Reality");

/*==========================
END
==========================*/