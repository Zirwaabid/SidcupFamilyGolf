var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrblur.style.left = dets.x - 250 + "px";
    crsrblur.style.top = dets.y - 250 + "px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        triggar: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        triggar: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})