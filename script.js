function navAnimation() {
    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "35vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
};



function pageTwoAnimation() {
    let rightElems = document.querySelectorAll(".right-elem");
    rightElems.forEach((relem) => {
        relem.addEventListener("mouseenter", () => {
            let rightElemImg = relem.childNodes[3];
            gsap.to(rightElemImg, {
                opacity: 1,
                scale: 1
            })
        });
        relem.addEventListener("mouseleave", () => {
            let rightElemImg = relem.childNodes[3];
            gsap.to(rightElemImg, {
                opacity: 0,
                scale: 0
            })
        });
        relem.addEventListener("mousemove", (dets) => {
            let measurement = relem.getBoundingClientRect();
            console.log(measurement)
            gsap.to(relem.childNodes[3], {
                x: dets.x - measurement.x - 70,
                y: dets.y - measurement.y - 160
            })
        })
    })
};

function page3VideoAnimation() {
    let page3Center = document.querySelector(".page3-center");
    let video = document.querySelector("#page3video");

    page3Center.addEventListener("click", () => {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: "0"
        })
    });

    video.addEventListener("click", () => {
        video.pause();
        gsap.to(video, {
            trasnform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

let video=document.querySelectorAll("#page7 video");
let sections=document.querySelectorAll(".sec-right");

sections.forEach((sec)=>{
    let video=sec.childNodes[3]
    sec.addEventListener("mouseenter",()=>{
        video.style.opacity=1;
        video.play();
    })
    sec.addEventListener("mouseleave",()=>{
        video.style.opacity=0;
        video.load();
    })
})



navAnimation();
pageTwoAnimation();
page3VideoAnimation();