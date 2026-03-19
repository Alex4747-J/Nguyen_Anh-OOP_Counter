export function initSplitText() {
<<<<<<< Updated upstream
  const paragraphs = document.querySelectorAll("p.split");
=======
  const paragraphs = document.querySelectorAll("p.split1");
>>>>>>> Stashed changes
  document.fonts.ready.then(() => {
    gsap.set(paragraphs, { opacity: 1 });

    SplitText.create(paragraphs, {
      type: "lines",
<<<<<<< Updated upstream
      linesClass: "line",
=======
      linesClass: "line1",
>>>>>>> Stashed changes
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          yPercent: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
        });
      }
    });
  });
}
