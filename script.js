function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

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
    let video = document.querySelectorAll("#page7 video");
    let sections = document.querySelectorAll(".sec-right");

    sections.forEach((sec) => {
        let video = sec.childNodes[3]
        sec.addEventListener("mouseenter", () => {
            video.style.opacity = 1;
            video.play();
        })
        sec.addEventListener("mouseleave", () => {
            video.style.opacity = 0;
            video.load();
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

function page9Animation() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            start: "top 80%",
            end: "top 20%",
            scrub: true
        }
    })
}




function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from("#page1", {
        opacity: 0,
        duration: 0.3,
        delay: -0.2
    })

    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "50px",
        duration: 2,
        ease: "expo.out"
    });

    tl.from("nav", {
        opacity: 0
    })

    tl.from("#page1 h1,#page1 p,#page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

}

// gsap.to("#btm6-part2 h4", {
//     x: 150,
//     duration: 1,
//     stagger: {
//         amount: -0.3
//     },
//     scrollTrigger: {
//         trigger: "#btm6-part2",
//         scroller: "body",
//         start: "top 80%",
//         end: "top -80",
//         scrub: true
//     }
// })



locomotive();
loadingAnimation();
navAnimation();
pageTwoAnimation();
page3VideoAnimation();
page9Animation();