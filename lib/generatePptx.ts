/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generatePptx() {
  const pptxgen = (await import("pptxgenjs")).default;
  const pres: any = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "AI Markets Research";
  pres.title = "AI Markets — March 2026";

  const C = {
    yellow: "FFD100",
    black: "000000",
    white: "FFFFFF",
    darkGray: "333333",
    medGray: "666666",
    orange: "F6693D",
  };

  const FONT_HEAD = "Arial Black";
  const FONT_BODY = "Arial";

  function addFooter(slide: any, pageNum?: number) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 4.95, w: 10.0, h: 0.675,
      fill: { color: C.darkGray },
    });
    slide.addText(
      "FOR INFORMATIONAL PURPOSES ONLY. NOT INVESTMENT ADVICE.",
      { x: 1.5, y: 5.0, w: 7.2, h: 0.55, fontSize: 6.5, color: C.white, align: "center", fontFace: FONT_BODY, valign: "middle", bold: true }
    );
    if (pageNum) {
      slide.addText(String(pageNum), {
        x: 9.3, y: 5.08, w: 0.5, h: 0.35, fontSize: 9, color: C.white, align: "right", fontFace: FONT_BODY, margin: 0,
      });
    }
  }

  function addHeadline(slide: any, text: string) {
    slide.addText(text, {
      x: 0.5, y: 0.2, w: 7.2, h: 0.7,
      fontSize: 27, color: C.black, bold: true, fontFace: FONT_HEAD, valign: "top", margin: 0,
    });
  }

  // Cover
  const cover = pres.addSlide();
  cover.background = { color: C.yellow };
  cover.addText("AI Markets", {
    x: 0.5, y: 1.0, w: 9.0, h: 1.2,
    fontSize: 52, color: C.black, bold: true, fontFace: FONT_HEAD, margin: 0,
  });
  cover.addText("March 2026", {
    x: 0.5, y: 2.2, w: 9.0, h: 0.8,
    fontSize: 28, color: C.black, bold: true, fontFace: FONT_HEAD, margin: 0,
  });
  addFooter(cover);

  // Remaining slides
  const slideContents = [
    "Agenda",
    "Why AI Matters to Markets",
    "What Is AI?",
    "The AI Stack",
    "Global Supply Chain Map",
    "Powering the Buildout",
    "Hyperscaler Capex",
    "Semiconductor Market Anatomy",
    "Memory Deep Dive (HBM)",
    "AI Lab Race",
    "Agentic AI: From Chatbots to Coworkers",
    "The Great Divergence",
    "Is This a Bubble?",
    "Supply Chain Fragility",
    "Policy & Regulation",
    "Political Headwinds",
    "Computing Beyond Earth",
    "Physical AI (Humanoids)",
    "Autonomous Mobility",
    "Healthcare AI",
    "Key Takeaways",
  ];

  slideContents.forEach((title, i) => {
    const slide = pres.addSlide();
    addHeadline(slide, title.toUpperCase());
    addFooter(slide, i + 2);
  });

  await pres.writeFile({ fileName: "AI-Markets-March-2026.pptx" });
}
