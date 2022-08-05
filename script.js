let loader = document.querySelector(".loader"), 
    overlay = document.querySelector(".overlay"),
    current = 0,
    img = document.images.length;

function loading(){
    if (img == 0) return hasLoaded();
    function onLoaded(){
        current += 1;
        let target = [100, 140];
        var perc = ((target[0]/img*current) << 0);
        var x = ((target[1]/img*current) << 0);
        overlay.style.clipPath = `circle(${x}% at 0 50%)`;
        if (perc > 25) overlay.style.backgroundColor = "#b583ca"
        if (perc > 50) overlay.style.backgroundColor = "#9d57b1"
        if (perc > 75) overlay.style.backgroundColor = "#6264b1"
        if (current === img) return hasLoaded();
    }
    function hasLoaded(){
        overlay.style.backgroundColor = "#2b6ebd";
        loader.style.transition = "transform 400ms ease"
        setTimeout(function(){
            loader.style.transform = "translate3d(100%,0,0)"
        }, 2000);
        setTimeout(function(){
            loader.style.display = "none";
        }, 4000)
    }
    
    for (let i = 0; i < img; i++){
        var j = new Image();
        j.src = document.images[i].src;
        j.onload = onLoaded;
        j.onerror = onLoaded;
    }
}    
document.addEventListener("DOMContentLoaded", loading, false);


// Animating Menu and Other
const ham = document.querySelector(".ham");
const hamWrap = document.querySelector(".ham-wrapper");
const hamCheck = document.querySelector(".ham-check");
const hamSpan = Array.from(hamWrap.querySelectorAll(".ham-span"));
const menuWrap = document.querySelector(".menu-wrapper");
const menu = document.querySelector(".menu");
const navWrap = document.querySelector(".nav-wrapper");

// Bagian Menu Open
const menuOpen = Array.from(document.querySelectorAll(".menu-open"));
navWrap.addEventListener("click", function(event){
    if (event.target == hamCheck || event.target == menuWrap || event.target.classList.contains("material-icons")){
        let [a,b,c,d,e,f,g] = [
            "span-open",
            "menu-clicked",
            "ham-scale",
            "menu-size",
            "menu-bg-blur",
            "ham-scaled",
            "ham-scales"
        ];
        if (ham.classList.contains("ham-scaled") || event.target == menuWrap || event.target == menuOpen[1]){
            // Hamburger Menu ___ START
            hamSpan.map(e => e.classList.remove(a));
            menu.classList.remove(b);
            // Menu Open __ START
            menuOpen.forEach( (e,i) => {
                e.classList.remove("menu-open-click")
                e.style.transitionDelay = `${(125*i)}ms`;
            });
            // Menu Open __ END
            setTimeout(function(){
                ham.classList.add(c);
            }, 625);
            setTimeout(function(){
                menuWrap.classList.remove(e);
                ham.classList.replace(c,g);
            }, 1025);
            setTimeout(function(){
                menuWrap.classList.remove(d);
                ham.classList.remove(g)
                ham.classList.remove(f)
            }, 1225);
            setTimeout(function(){
                ham.classList.remove(c)
            }, 1525);
            // Hamburger Menu ___ END
        }
        else{
            // Hamburger Menu ___ START
            ham.classList.add(c);
            setTimeout(function(){
                menuWrap.classList.add(d);
                menuWrap.classList.add(e);
            }, 300);
            setTimeout(function(){
                ham.classList.replace(c,g);
            }, 600)
            setTimeout(function(){
                ham.classList.remove(g)
                ham.classList.add(f);
            }, 900)
            setTimeout(function(){
                menu.classList.add(b)
                hamSpan.map(e => e.classList.add(a));
            }, 1200)
            // Hamburger Menu ___ END

            // Menu Open __ START
            menuOpen.forEach( (e,i) => {
                e.classList.add("menu-open-click")
                e.style.transitionDelay = `${1200+(125*i)}ms`;
            });
            // Menu Open __ END
        }
    }
})

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
})


// Animasi Fading 
// var offset = 100;
// window.addEventListener("scroll", function(){
//     console.log("Jarak J = "+j.getBoundingClientRect().top);
//     console.log("innerHeight - Offset = "+ ((window.innerHeight || document.documentElement.clientHeight) - offset));
//     console.log(j.getBoundingClientRect().top <= (window.innerHeight - offset));
// })




// .opacity-gone{
//     opacity: 1;
// }
// .transform-gone{
//     transform: translate(0);
// }
var headerText = document.querySelectorAll(".header-text-wrapper h1, .header-text-wrapper p, .middle-image");

window.addEventListener("load", function(){
    setTimeout(function(){
        headerText.forEach(function(e,i){
            e.classList.add("opacity-gone", "transform-gone");
            headerText[0].classList.add("phone-moving");
            e.style.transition = `all .4s ${(i+1)*100}ms`;
            headerText[0].style.transition = "all .4s 400ms"
        })
    }, 2000)
})

function cls(v){
    document.querySelectorAll(v).forEach(function(e){
        e.classList.add("isGone");
    })
    return document.querySelectorAll(v);
};
function id(v){return document.querySelector(v)};


// Main Section
var mainHeader = cls(".main .header h1");
var mainH2 = cls(".work-header.header.work-header-2 h2");
var mainIcon = cls(".work-text-icon .material-icons");
var mainH1 = cls("h1.work-h1");
var mainP = cls("p.work-p");


// Project Section
var projectSec1 = cls(".pe-1 :is(.project-mini-num, .project-text-header, .project-text-p, .project-img img, .project-text-btn)");
var projectSec2 = cls(".pe-2 :is(.project-mini-num, .project-text-header, .project-text-p, .project-img img, .project-text-btn)");
var projectSec3 = cls(".pe-3 :is(.project-mini-num, .project-text-header, .project-text-p, .project-img img, .project-text-btn)");

// About Section
var aboutSecHeader = cls(".about-text-header h1, .about-text-paragraph-mini, p.about-text-p, .about-text-button, .about-hero-img img")

// nLetter Section
var nLetterSec = cls(".nletter-text-h2, p.nletter-text-p, .nletter-form form > *")

// Footer Section
var footerDesc = cls(".footer-desc > :is(h1, p, div)");
var footerProduct = cls(".footer-product h1, ul.footer-product-list > *");
var footerCompany = cls(".footer-company h1, ul.footer-company-list > *");
var footerEvent = cls(".footer-event-list > *");

// Media Social Section
var footerMedSos = cls(".footer-sm-icons > *");

// Copyright Section
var footerCopyright = cls(".footer-copyright > *");

function gg(a, b = 100, off = 100){
    window.addEventListener("load", function(){
        window.addEventListener("scroll", function(){
            a.forEach(function(e,i){
                if(e.getBoundingClientRect().top <= ((window.innerHeight||document.documentElement.clientHeight) - off)){
                    e.classList.add("opacity-gone", "transform-gone");
                    e.style.transition = `all .4s ${(i+1)*b}ms`;
                }
                // else {
                //     e.classList.remove("opacity-gone", "transform-gone");
                // }
            })
        })
    })
}

// To Known client width device
// var numberWidth = id(".number-width");
// setInterval(function(){
//     numberWidth.innerHTML = document.body.getBoundingClientRect().width+" X "+ innerHeight;
// }, 1000)



// Starting Animation

// Main Section
gg(mainHeader, 50);
gg(mainH2);
gg(mainH1);
gg(mainP);
gg(mainIcon);

// Project Section
gg(projectSec1, 100, 25);
gg(projectSec2, 100, 25);
gg(projectSec3, 100, 25);

// About Section
gg(aboutSecHeader, 100, 50)

// nLetter Section
gg(nLetterSec);

// Footer Section
gg(footerDesc);
gg(footerProduct);
gg(footerCompany);
gg(footerEvent);
gg(footerMedSos, 100, 50);
gg(footerCopyright, 100, 0);
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {;
//     window.alert("cobaan cok")
// }

