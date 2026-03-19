export function initSplitText() {
  const paragraphs = document.querySelectorAll("p.split1");
  document.fonts.ready.then(() => {
    gsap.set(paragraphs, { opacity: 1 });

    SplitText.create(paragraphs, {
      type: "lines",
      linesClass: "line-p",
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
