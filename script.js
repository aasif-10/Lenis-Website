// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let elem = document.querySelectorAll(".image");
elem.forEach((e) => {
  let image = e.querySelector("img");

  let xTransform = gsap.utils.random(-100, 100);
  console.log(xTransform);
  let tl = gsap.timeline();

  tl.set(
    image,
    {
      transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
    },
    "start"
  )
    .to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(
      image,
      {
        xPercent: xTransform,
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    );
});
