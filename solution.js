/*==================================================
        LEGRON SOLUTION PAGE
        solution.js
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

/*==========================
PAGE FADE
==========================*/

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

setTimeout(() => {

document.body.style.opacity = "1";

},200);


/*==========================
NAVBAR EFFECT
==========================*/

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

nav.style.background="rgba(5,8,22,.92)";
nav.style.backdropFilter="blur(20px)";
nav.style.boxShadow="0 10px 40px rgba(25,200,255,.25)";

}
else{

nav.style.background="rgba(255,255,255,.06)";
nav.style.boxShadow="none";

}

});


/*==========================
SCROLL REVEAL
==========================*/

const items=document.querySelectorAll(
".left,.card,.center-logo"
);

function reveal(){

const trigger=window.innerHeight*0.85;

items.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";
item.style.transform="translateY(0px)";

}

});

}

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==========================
CARD TILT EFFECT
==========================*/

const cards=document.querySelectorAll(".card");

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

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


/*==========================
BUTTON HOVER
==========================*/

document.querySelectorAll(".demo-btn,.nav-page")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow=
"0 0 40px #19C8FF,0 0 60px #7A4DFF";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});


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

glow.style.boxShadow=
"0 0 30px #19C8FF,0 0 60px #7A4DFF";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});


/*==========================
PARALLAX BACKGROUND
==========================*/

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

const c1=document.querySelector(".circle1");
const c2=document.querySelector(".circle2");
const c3=document.querySelector(".circle3");

if(c1){

c1.style.transform=
`translate(${x*35}px,${y*35}px)`;

}

if(c2){

c2.style.transform=
`translate(${-x*35}px,${-y*35}px)`;

}

if(c3){

c3.style.transform=
`translate(${x*20}px,${-y*20}px)`;

}

});


/*==========================
FLOATING CENTER LOGO
==========================*/

const logo=document.querySelector(".center-logo");

if(logo){

setInterval(()=>{

logo.style.transition=".6s ease";

logo.style.transform=
"translate(-50%,-50%) translateY(-8px)";

setTimeout(()=>{

logo.style.transform=
"translate(-50%,-50%) translateY(0px)";

},600);

},1600);

}


/*==========================
ANIMATED CONNECTION LINES
==========================*/

const lines=document.querySelectorAll(".line");

lines.forEach((line,index)=>{

line.animate([

{
opacity:.2
},

{
opacity:1
},

{
opacity:.2
}

],{

duration:1800+index*300,

iterations:Infinity

});

});


/*==========================
TYPING EFFECT
==========================*/

const title=document.querySelector(".left h5");

if(title){

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}


/*==========================
CONSOLE
==========================*/

console.log("LEGRON Solution Loaded");

console.log("Innovate Beyond Reality");

/*==========================
END
==========================*/