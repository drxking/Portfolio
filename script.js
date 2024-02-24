gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

function copyEmail() {
  // Get the input element
  var emailToCopy = document.getElementById("emailToCopy");

  // Select the email in the input element
  emailToCopy.select();
  emailToCopy.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected email to the clipboard
  document.execCommand("copy");

  // Deselect the email (optional)
  document.getSelection().removeAllRanges();
}

let openb = document.getElementById("bar");
let closeb = document.getElementById("close");
let respo = document.getElementById("respo");
gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
  x: 200,
  opacity: 0,
});

openb.addEventListener("click", () => {
  // respo.style.transform = `translateX(0%)`
  respo.style.opacity = 1;
  respo.style.pointerEvents = `visible`;
  gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
    x: 0,
    stagger: 0.05,
    opacity: 1,
  });
});

closeb.addEventListener("click", () => {
  // respo.style.transform = `translateX(100%)`
  respo.style.opacity = 0;
  respo.style.pointerEvents = `none`;
  gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
    x: 200,
    stagger: 0.05,
    opacity: 0,
  });
});
let lis = document.querySelectorAll("#respo ul li");
lis.forEach((li) => {
  li.addEventListener("click", () => {
    // respo.style.transform = `translateX(100%)`
    respo.style.opacity = 0;
    respo.style.pointerEvents = `none`;
    gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
      x: 200,
      stagger: 0.05,
      opacity: 0,
    });
  });
});
gsap.to(".fan img", {
  rotate: `1090deg`,
  scrollTrigger: {
    trigger: `main`,
    scroller: "main",
    start: `top top`,
    end: `bottom`,
    scrub: 1,
  },
});
let cursor = document.querySelector(".cursor");
var prev, next;
document.addEventListener("mousemove", (dets) => {
  gsap.to(".cur-top", {
    x: dets.clientX,
    y: dets.clientY,
  });
});
document.addEventListener("mousemove", (dets) => {
  next = prev;
  let degg;
  prev = dets.clientX;
  degg = -(next - dets.clientX) * 3;

  // cursor.style.transform = `rotate(${degg}deg)`
  gsap.to(cursor, {
    transform: `rotate(${degg}deg)`,
  });
  gsap.to(cursor, {
    transform: `rotate(0deg)`,
  });
});
document.addEventListener("mousedown", () => {
  gsap.to(".cursor", {
    borderRadius: `50%`,
    rotate: `90deg`,
    duration: 0.3,
  });
});
document.addEventListener("mouseup", () => {
  gsap.to(".cursor", {
    borderRadius: `0% `,
    rotate: `0deg`,
    duration: 0.3,
  });
});

document.querySelectorAll(".btn-scroll").forEach((btn) => {
  btn.addEventListener("click", () => {
    locoScroll.scrollTo(document.getElementById("section-3"));
  });
});
