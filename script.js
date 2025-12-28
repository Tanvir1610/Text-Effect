// Split the headers
const basicSplit = SplitText.create(".basic", { type: "chars" });
const betterSplit = SplitText.create(".better", { type: "chars" });
const veryNiceSplit = SplitText.create(".veryNice", { type: "chars" });
const elegantSplit = SplitText.create(".elegant", { type: "chars" });
const fancyPantsSplit = SplitText.create(".fancyPants", { type: "chars" });

// BASIC
gsap.from(basicSplit.chars, {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out"
});

// BETTER
gsap.from(betterSplit.chars, {
  y: 40,
  opacity: 0,
  rotationX: 90,
  duration: 0.8,
  stagger: 0.03,
  ease: "back.out(1.7)"
});

// VERY NICE
gsap.from(veryNiceSplit.chars, {
  y: 60,
  opacity: 0,
  scale: 0.5,
  duration: 1,
  stagger: 0.035,
  ease: "elastic.out(1, 0.5)"
});

// ELEGANT
gsap.from(elegantSplit.chars, {
  y: 80,
  opacity: 0,
  rotationY: 90,
  duration: 1,
  stagger: 0.04,
  ease: "power4.out"
});

// FANCY PANTS
gsap.from(fancyPantsSplit.chars, {
  y: 100,
  opacity: 0,
  rotation: 360,
  scale: 0,
  duration: 1.2,
  stagger: 0.04,
  ease: "expo.out"
});
