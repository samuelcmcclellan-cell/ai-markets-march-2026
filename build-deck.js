const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI Markets Research";
pres.title = "AI Markets — March 2026";

// ─── Brand Constants ─────────────────────────────────────────────
const C = {
  yellow:    "FFD100",
  black:     "000000",
  white:     "FFFFFF",
  darkGray:  "333333",
  medGray:   "666666",
  lightGray: "E5E5E5",
  orange:    "F6693D",
  gold:      "FFB800",
  green:     "00A854",
  pink:      "E8478D",
  teal:      "008B8B",
  red:       "CC0000",
};

const FONT_HEAD = "Arial Black";
const FONT_BODY = "Arial";

// ─── Helper Functions ────────────────────────────────────────────
function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.95, w: 10.0, h: 0.675,
    fill: { color: C.darkGray },
  });
  slide.addText(
    "FOR INFORMATIONAL PURPOSES ONLY. NOT INVESTMENT ADVICE. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.",
    { x: 1.5, y: 5.0, w: 7.2, h: 0.55, fontSize: 6.5, color: C.white, align: "center", fontFace: FONT_BODY, valign: "middle", bold: true }
  );
  if (pageNum) {
    slide.addText(String(pageNum), {
      x: 9.3, y: 5.08, w: 0.5, h: 0.35, fontSize: 9, color: C.white, align: "right", fontFace: FONT_BODY, margin: 0,
    });
  }
}

function addThemeTag(slide, label, color) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.8, y: 0.18, w: 1.9, h: 0.32,
    fill: { color: color }, rectRadius: 0.05,
  });
  slide.addText(label, {
    x: 7.8, y: 0.18, w: 1.9, h: 0.32,
    fontSize: 10, color: C.black, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
  });
}

function addHeadline(slide, text, opts) {
  const h = (opts && opts.h) || 0.7;
  slide.addText(text, {
    x: 0.5, y: 0.2, w: 7.2, h: h,
    fontSize: 27, color: C.black, bold: true, fontFace: FONT_HEAD, valign: "top", margin: 0,
  });
}

function addSubhead(slide, text, opts) {
  const y = (opts && opts.y) || 0.9;
  const h = (opts && opts.h) || 0.6;
  slide.addText(text, {
    x: 0.5, y: y, w: 9.0, h: h,
    fontSize: 13.5, color: C.medGray, fontFace: FONT_BODY, valign: "top", margin: 0,
  });
}

function addChartTitle(slide, text, x) {
  slide.addText(text, {
    x: x, y: 1.55, w: 4.3, h: 0.3,
    fontSize: 14, color: C.black, bold: true, fontFace: FONT_BODY, valign: "bottom", margin: 0,
  });
  slide.addShape(pres.shapes.LINE, {
    x: x, y: 1.85, w: 4.3, h: 0,
    line: { color: C.black, width: 1.5 },
  });
}

function addFullChartTitle(slide, text) {
  slide.addText(text, {
    x: 0.5, y: 1.55, w: 9.0, h: 0.3,
    fontSize: 14, color: C.black, bold: true, fontFace: FONT_BODY, valign: "bottom", margin: 0,
  });
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 1.85, w: 9.0, h: 0,
    line: { color: C.black, width: 1.5 },
  });
}

function addSource(slide, text, x, y, w) {
  slide.addText(text, {
    x: x || 0.5, y: y || 4.4, w: w || 9.0, h: 0.55,
    fontSize: 7, color: "999999", fontFace: FONT_BODY, valign: "top", margin: 0,
  });
}

function makeBigNumber(slide, number, label, x, y, w, color) {
  slide.addText(number, {
    x: x, y: y, w: w, h: 0.7,
    fontSize: 44, color: color || C.orange, bold: true, fontFace: FONT_HEAD, align: "center", margin: 0,
  });
  slide.addText(label, {
    x: x, y: y + 0.65, w: w, h: 0.45,
    fontSize: 11, color: C.medGray, fontFace: FONT_BODY, align: "center", margin: 0,
  });
}

function makeSmallStat(slide, number, label, x, y, w, color) {
  slide.addText(number, {
    x: x, y: y, w: w, h: 0.55,
    fontSize: 32, color: color || C.orange, bold: true, fontFace: FONT_HEAD, align: "center", margin: 0,
  });
  slide.addText(label, {
    x: x, y: y + 0.5, w: w, h: 0.35,
    fontSize: 9.5, color: C.medGray, fontFace: FONT_BODY, align: "center", margin: 0,
  });
}

function addImagePlaceholder(slide, text, x, y, w, h) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: w, h: h,
    fill: { color: C.lightGray },
    line: { color: "CCCCCC", width: 1, dashType: "dash" },
  });
  slide.addText(text, {
    x: x, y: y, w: w, h: h,
    fontSize: 10, color: C.medGray, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
  });
}

// ─── SLIDE 1: Cover ──────────────────────────────────────────────
function slide01() {
  const slide = pres.addSlide();
  slide.background = { color: C.yellow };

  slide.addText("AI Markets", {
    x: 0.5, y: 1.0, w: 9.0, h: 1.2,
    fontSize: 52, color: C.black, bold: true, fontFace: FONT_HEAD, align: "left", valign: "middle", margin: 0,
  });
  slide.addText("March 2026", {
    x: 0.5, y: 2.2, w: 9.0, h: 0.8,
    fontSize: 28, color: C.black, bold: true, fontFace: FONT_HEAD, align: "left", valign: "top", margin: 0,
  });
  slide.addText("THE LANDSCAPE", {
    x: 0.5, y: 3.2, w: 9.0, h: 0.5,
    fontSize: 15, color: C.darkGray, fontFace: FONT_BODY, align: "left", valign: "top", margin: 0,
  });
  slide.addText("March 2026", {
    x: 8.0, y: 0.2, w: 1.8, h: 0.4,
    fontSize: 16, color: C.black, fontFace: FONT_BODY, align: "right", valign: "middle", margin: 0,
  });

  addFooter(slide);
}

// ─── SLIDE 2: Agenda ─────────────────────────────────────────────
function slide02() {
  const slide = pres.addSlide();
  addHeadline(slide, "AGENDA");
  addThemeTag(slide, "OVERVIEW", C.orange);

  const items = [
    { num: "01", label: "Landscape", color: C.orange },
    { num: "02", label: "Market", color: C.gold },
    { num: "03", label: "Shifts", color: C.green },
    { num: "04", label: "Risks", color: C.red },
    { num: "05", label: "Frontier", color: C.teal },
  ];

  items.forEach((item, i) => {
    const y = 1.3 + i * 0.65;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.5,
      fill: { color: item.color },
    });
    slide.addText(item.num, {
      x: 0.8, y: y, w: 0.6, h: 0.5,
      fontSize: 22, color: item.color, bold: true, fontFace: FONT_HEAD, valign: "middle", margin: 0,
    });
    slide.addText(item.label, {
      x: 1.5, y: y, w: 4.0, h: 0.5,
      fontSize: 18, color: C.black, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
  });

  addFooter(slide, 2);
}

// ─── SLIDE 3: Why AI Matters to Markets ──────────────────────────
function slide03() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE LANDSCAPE", C.orange);
  addHeadline(slide, "WHY AI MATTERS TO MARKETS");

  const blocks = [
    {
      bold: "AI is the largest capital expenditure cycle in history.",
      body: "Amazon, Alphabet, Microsoft, Meta, and Oracle have guided to $685B in combined 2026 capex \u2014 and cumulative AI data center investment is on track to exceed $4 trillion by 2030.",
    },
    {
      bold: "It touches every layer of the economy.",
      body: "From the raw silicon in the ground, to the chips in a data center, to the AI agent booking your flight \u2014 this is a full-stack economic transformation.",
    },
    {
      bold: "The market is repricing everything.",
      body: "Semiconductor stocks (SOXX) up ~13% YTD. Software stocks (IGV) down ~20% YTD. A 33-point spread \u2014 the same AI wave is creating winners and losers simultaneously.",
    },
  ];

  blocks.forEach((block, i) => {
    const y = 1.15 + i * 0.95;
    slide.addText([
      { text: block.bold, options: { bold: true, fontSize: 12.5, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
      { text: block.body, options: { fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    ], {
      x: 0.5, y: y, w: 9.0, h: 0.85, valign: "top", margin: 0,
    });
  });

  addSource(slide, "Sources: Company earnings guidance (Q4 2025/Q1 2026), Bloomberg, S&P Global Market Intelligence.");
  addFooter(slide, 3);
}

// ─── SLIDE 4: What Is AI? (Evolution Timeline) ──────────────────
function slide04() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE LANDSCAPE", C.orange);
  addHeadline(slide, "WHAT IS AI?");
  addSubhead(slide, "Five paradigms of artificial intelligence \u2014 each building on the last.");

  // Horizontal timeline line
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 2.45, w: 9.0, h: 0,
    line: { color: C.orange, width: 3 },
  });

  const eras = [
    { period: "1950s\u201380s", name: "Symbolic AI", desc: "Hand-coded rules", color: C.medGray },
    { period: "1990s\u20132010s", name: "Machine Learning", desc: "Statistical pattern recognition", color: C.medGray },
    { period: "2012\u20132020", name: "Deep Learning", desc: "Neural networks at scale", color: C.medGray },
    { period: "2020\u20132024", name: "Generative AI", desc: "Creates text, images, code", color: C.medGray },
    { period: "2025+", name: "Agentic AI", desc: "Autonomous multi-step action", color: C.orange },
  ];

  eras.forEach((era, i) => {
    const x = 0.5 + i * 1.85;
    const w = 1.7;

    // Dot on timeline
    slide.addShape(pres.shapes.OVAL, {
      x: x + w / 2 - 0.1, y: 2.35, w: 0.2, h: 0.2,
      fill: { color: era.color },
    });

    // Card below
    const isHighlighted = i === 4;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.7, w: w, h: 1.4,
      fill: { color: isHighlighted ? C.orange : C.white },
      line: { color: isHighlighted ? C.orange : C.lightGray, width: 1 },
    });
    // Left accent bar
    if (!isHighlighted) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 2.7, w: 0.06, h: 1.4,
        fill: { color: era.color },
      });
    }

    slide.addText(era.period, {
      x: x + 0.1, y: 2.75, w: w - 0.2, h: 0.3,
      fontSize: 8.5, color: isHighlighted ? C.white : "999999", fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    slide.addText(era.name, {
      x: x + 0.1, y: 3.05, w: w - 0.2, h: 0.35,
      fontSize: 11.5, color: isHighlighted ? C.white : C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    slide.addText(era.desc, {
      x: x + 0.1, y: 3.4, w: w - 0.2, h: 0.55,
      fontSize: 9, color: isHighlighted ? C.white : C.medGray, fontFace: FONT_BODY, valign: "top", margin: 0,
    });
  });

  addFooter(slide, 4);
}

// ─── SLIDE 5: The AI Stack ───────────────────────────────────────
function slide05() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE LANDSCAPE", C.orange);
  addHeadline(slide, "THE AI STACK");
  addSubhead(slide, "From raw silicon to autonomous agents \u2014 the complete ecosystem.");

  const layers = [
    { name: "Applications & Agents", companies: "Salesforce, ServiceNow, Palantir", color: C.orange },
    { name: "Models & AI Platforms", companies: "OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, xAI", color: C.orange },
    { name: "Cloud / Data Centers", companies: "AWS, Azure, GCP, Oracle, CoreWeave", color: C.gold },
    { name: "Systems & Networking", companies: "Dell, HPE, Arista, Cisco, Coherent", color: C.gold },
    { name: "Packaging / OSAT", companies: "ASE, Amkor, TSMC (in-house)", color: C.green },
    { name: "Memory", companies: "SK Hynix, Samsung, Micron (~95% market)", color: C.green },
    { name: "Chip Design", companies: "NVIDIA, AMD, Broadcom, Qualcomm, Marvell", color: C.teal },
    { name: "Foundry / Fabrication", companies: "TSMC (~90% advanced), Samsung Foundry, Intel", color: C.teal },
    { name: "Equipment", companies: "ASML (EUV monopoly), Applied Materials, Lam Research, Tokyo Electron", color: C.pink },
    { name: "Raw Materials", companies: "Silicon, rare earths, helium, neon, photoresists", color: C.pink },
  ];

  layers.forEach((layer, i) => {
    const y = 1.35 + i * 0.3;
    // Color accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.12, h: 0.28,
      fill: { color: layer.color },
    });
    // Layer name
    slide.addText(layer.name, {
      x: 0.7, y: y, w: 2.8, h: 0.28,
      fontSize: 9.5, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    // Companies
    slide.addText(layer.companies, {
      x: 3.6, y: y, w: 6.0, h: 0.28,
      fontSize: 9, color: C.medGray, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
  });

  addSource(slide, "Source: Industry analysis, company filings.");
  addFooter(slide, 5);
}

// ─── SLIDE 6: Global Supply Chain Map ────────────────────────────
function slide06() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE LANDSCAPE", C.orange);
  addHeadline(slide, "WHERE CHIPS COME FROM");

  addImagePlaceholder(slide, "IMAGE: stylized world map with labeled chip supply chain regions", 0.5, 1.0, 4.3, 2.0);

  const regions = [
    { name: "United States", role: "Design & Software", detail: "~50% global chip design revenue", risk: "Limited advanced manufacturing", color: C.orange },
    { name: "Taiwan", role: "The Factory Floor", detail: "TSMC: ~90% most advanced chips", risk: "SINGLE POINT OF FAILURE", color: C.red },
    { name: "South Korea", role: "Memory Capital", detail: "Samsung + SK Hynix: ~70% DRAM, ~62% HBM", risk: "Helium dependence on Qatar", color: C.gold },
    { name: "Netherlands", role: "The Gatekeeper", detail: "ASML: sole EUV manufacturer ($380M/machine)", risk: "Single-company dependency", color: C.teal },
    { name: "Japan", role: "Hidden Backbone", detail: "~50% of key semiconductor materials", risk: "Aging demographics", color: C.pink },
    { name: "China", role: "The Wildcard", detail: "Largest wafer capacity, mature nodes", risk: "Cut off from EUV", color: C.medGray },
    { name: "Middle East (Qatar)", role: "Critical Gas Supplier", detail: "~1/3 of global helium supply", risk: "DISRUPTED by Iran/Hormuz conflict", color: C.red },
  ];

  // Region blocks on the right and below
  const cols = 2;
  regions.forEach((r, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 5.2 + col * 2.3;
    const y = 1.0 + row * 0.75;

    // If we exceed the right side, wrap below the image placeholder
    let bx, by;
    if (i < 4) {
      bx = 5.2 + (i % 2) * 2.3;
      by = 1.0 + Math.floor(i / 2) * 0.75;
    } else {
      bx = 0.5 + (i - 4) * 3.1;
      by = 3.2 + 0;
    }

    slide.addShape(pres.shapes.RECTANGLE, {
      x: bx, y: by, w: i < 4 ? 2.2 : 2.9, h: 0.7,
      fill: { color: C.white },
      line: { color: C.lightGray, width: 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: bx, y: by, w: 0.06, h: 0.7,
      fill: { color: r.color },
    });
    slide.addText([
      { text: r.name, options: { bold: true, fontSize: 8.5, color: C.black, fontFace: FONT_BODY, breakLine: true } },
      { text: r.role + " \u2014 " + r.detail, options: { fontSize: 7, color: C.medGray, fontFace: FONT_BODY, breakLine: true } },
      { text: "Risk: " + r.risk, options: { fontSize: 7, color: C.red, fontFace: FONT_BODY } },
    ], {
      x: bx + 0.12, y: by, w: (i < 4 ? 2.2 : 2.9) - 0.2, h: 0.7, valign: "middle", margin: 0,
    });
  });

  addSource(slide, "Sources: SIA, SEMI, company disclosures, USGS.", 0.5, 4.0);
  addFooter(slide, 6);
}

// ─── SLIDE 7: Powering the Buildout ──────────────────────────────
function slide07() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE LANDSCAPE", C.orange);
  addHeadline(slide, "POWERING THE BUILDOUT");

  addImagePlaceholder(slide, "IMAGE: data center or power plant aerial photo", 5.2, 1.0, 4.3, 1.8);

  // Power demand block
  slide.addText([
    { text: "Power Demand", options: { bold: true, fontSize: 12, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Data center electricity consumption:", options: { fontSize: 10, color: C.darkGray, fontFace: FONT_BODY, breakLine: true } },
    { text: "196 TWh (2020) \u2192 325 TWh (2024) \u2192 500 TWh (2026E) \u2192 1,000 TWh (2030E)", options: { fontSize: 10, color: C.orange, bold: true, fontFace: FONT_BODY, breakLine: true } },
    { text: "Currently 4.4% of US electricity, projected 12% by 2030. Grid queue: 2,600 GW waiting, 3\u20135 year wait.", options: { fontSize: 9, color: C.medGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 1.0, w: 4.5, h: 1.2, valign: "top", margin: 0,
  });

  // Nuclear deals block
  slide.addText([
    { text: "Nuclear Deals", options: { bold: true, fontSize: 12, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Microsoft: Three Mile Island restart (835 MW). Google Kairos SMR: 500 MW by 2030. Amazon: 3 nuclear investments. Oracle: nuclear-powered DCs. Meta: seeking 1\u20134 GW nuclear.", options: { fontSize: 9, color: C.darkGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 2.35, w: 4.5, h: 0.9, valign: "top", margin: 0,
  });

  // Gas turbines block
  slide.addText([
    { text: "Gas Turbines", options: { bold: true, fontSize: 12, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "xAI Colossus 2: 41 gas turbines (1.2 GW behind-the-meter). GE Vernova: 80 GW backlog, $150B pending orders.", options: { fontSize: 9, color: C.darkGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 3.35, w: 4.5, h: 0.8, valign: "top", margin: 0,
  });

  // Stats on the right below image
  makeSmallStat(slide, "500 TWh", "2026E DC power consumption", 5.2, 3.0, 2.0);
  makeSmallStat(slide, "2,600 GW", "Grid interconnection queue", 7.5, 3.0, 2.0);

  addSource(slide, "Sources: IEA, EIA, company announcements, PJM Interconnection.");
  addFooter(slide, 7);
}

// ─── SLIDE 8: Who Is Buying? (Capex) ────────────────────────────
function slide08() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE MARKET", C.gold);
  addHeadline(slide, "WHO IS BUYING ALL THESE CHIPS?");

  makeBigNumber(slide, "$685B+", "Combined hyperscaler 2026E capex", 5.2, 0.2, 4.3);

  addFullChartTitle(slide, "Hyperscaler Capital Expenditure ($ Billions)");

  const tableRows = [
    [
      { text: "Company", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "left" } },
      { text: "FY2024", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "FY2025", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "FY2026E", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "center" } },
    ],
    [
      { text: "Amazon", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "$75B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$125B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$200B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", color: C.orange, bold: true } },
    ],
    [
      { text: "Alphabet", options: { fontSize: 9, fontFace: FONT_BODY, bold: true, fill: { color: "F9F9F9" } } },
      { text: "$52.5B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "$85B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "$180B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", color: C.orange, bold: true, fill: { color: "F9F9F9" } } },
    ],
    [
      { text: "Microsoft", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "$55B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$90B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$130B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", color: C.orange, bold: true } },
    ],
    [
      { text: "Meta", options: { fontSize: 9, fontFace: FONT_BODY, bold: true, fill: { color: "F9F9F9" } } },
      { text: "$37B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "$72B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "$125B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", color: C.orange, bold: true, fill: { color: "F9F9F9" } } },
    ],
    [
      { text: "Oracle", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "$12B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$25B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "$50B", options: { fontSize: 9, fontFace: FONT_BODY, align: "center", color: C.orange, bold: true } },
    ],
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.95, w: 4.5, colW: [1.2, 1.1, 1.1, 1.1],
    border: { pt: 0.5, color: C.lightGray },
    margin: [3, 5, 3, 5],
  });

  slide.addText("Expanding buyer base: AI labs (OpenAI, Anthropic), neoclouds (CoreWeave, Lambda), governments, enterprises.", {
    x: 0.5, y: 4.05, w: 9.0, h: 0.35,
    fontSize: 10, color: C.darkGray, fontFace: FONT_BODY, valign: "top", margin: 0,
  });

  addSource(slide, "Sources: Company earnings calls, Bloomberg estimates.");
  addFooter(slide, 8);
}

// ─── SLIDE 9: Semiconductor Market Anatomy ───────────────────────
function slide09() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE MARKET", C.gold);
  addHeadline(slide, "THE $975B SEMICONDUCTOR MARKET");
  addSubhead(slide, "Logic + Memory = ~70% of the market \u2014 AI\u2019s center of gravity.");

  const segments = [
    { name: "Logic (GPUs, CPUs, accelerators)", value: "~$390B", pct: 40, color: C.orange },
    { name: "Memory (DRAM + NAND + HBM)", value: "~$290B", pct: 30, color: C.gold },
    { name: "Analog", value: "~$95B", pct: 10, color: C.green },
    { name: "Discrete", value: "~$50B", pct: 5, color: C.teal },
    { name: "Optoelectronics & Sensors", value: "~$80B", pct: 8, color: C.pink },
    { name: "Equipment", value: "~$110B", pct: 11, color: C.medGray },
  ];

  // Horizontal bar chart style
  segments.forEach((seg, i) => {
    const y = 1.55 + i * 0.45;
    const barW = (seg.pct / 40) * 4.0; // Scale bars

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: barW, h: 0.3,
      fill: { color: seg.color },
    });
    slide.addText(seg.name, {
      x: 0.5 + barW + 0.15, y: y, w: 4.5, h: 0.3,
      fontSize: 9.5, color: C.black, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    slide.addText(seg.value, {
      x: 8.0, y: y, w: 1.5, h: 0.3,
      fontSize: 10, color: C.orange, bold: true, fontFace: FONT_HEAD, align: "right", valign: "middle", margin: 0,
    });
  });

  // Highlight callout
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9.0, h: 0.3,
    fill: { color: "FFF3E0" },
  });
  slide.addText("Logic + Memory = ~$680B (~70% of total) \u2014 AI\u2019s center of gravity.", {
    x: 0.7, y: 4.1, w: 8.5, h: 0.3,
    fontSize: 10.5, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: WSTS, SIA, Gartner, SEMI (2026 estimates).");
  addFooter(slide, 9);
}

// ─── SLIDE 10: Memory Deep Dive (HBM) ───────────────────────────
function slide10() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE MARKET", C.gold);
  addHeadline(slide, "THE MEMORY WALL");
  addSubhead(slide, "HBM is the binding constraint in AI infrastructure.");

  // Left panel: HBM TAM bar chart
  addChartTitle(slide, "HBM Total Addressable Market ($B)", 0.5);

  slide.addChart(pres.charts.BAR, [{
    name: "HBM TAM",
    labels: ["2023", "2024", "2025", "2026", "2028"],
    values: [4, 16, 35, 55, 100],
  }], {
    x: 0.5, y: 1.95, w: 4.3, h: 2.3,
    barDir: "col",
    showTitle: false,
    chartColors: [C.orange],
    catAxisLabelColor: C.medGray,
    valAxisLabelColor: "999999",
    catAxisLabelFontSize: 9,
    valAxisLabelFontSize: 9,
    valGridLine: { color: C.lightGray, size: 0.5 },
    catGridLine: { style: "none" },
    showValue: true,
    dataLabelPosition: "outEnd",
    dataLabelColor: C.darkGray,
    dataLabelFontSize: 9,
    showLegend: false,
  });

  // Right panel: stats
  addChartTitle(slide, "Key Metrics", 5.2);

  makeSmallStat(slide, "62%", "SK Hynix HBM share", 5.2, 2.0, 2.0);
  makeSmallStat(slide, "21%", "Micron HBM share", 7.4, 2.0, 2.0);
  makeSmallStat(slide, "17%", "Samsung HBM share", 5.2, 2.9, 2.0, C.gold);

  // Bandwidth comparison
  slide.addText([
    { text: "Bandwidth Comparison", options: { bold: true, fontSize: 10, color: C.black, fontFace: FONT_BODY, breakLine: true } },
    { text: "DDR5: 50 GB/s  |  HBM3E: 1,200 TB/s  |  HBM4: 2,800 TB/s", options: { fontSize: 9, color: C.orange, bold: true, fontFace: FONT_BODY, breakLine: true } },
    { text: "Total memory market: $200B in 2026. DRAM ASP forecast +33% YoY.", options: { fontSize: 8.5, color: C.medGray, fontFace: FONT_BODY } },
  ], {
    x: 5.2, y: 3.55, w: 4.3, h: 0.8, valign: "top", margin: 0,
  });

  addSource(slide, "Sources: TrendForce, company disclosures, industry estimates.");
  addFooter(slide, 10);
}

// ─── SLIDE 11: AI Lab Revenue Race ───────────────────────────────
function slide11() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE MARKET", C.gold);
  addHeadline(slide, "THE AI LAB RACE");
  addSubhead(slide, "Mostly private. Revenue growing explosively but profitability uncertain.");

  const labs = [
    { name: "OpenAI", val: "~$840B", detail: "$20B ARR", color: C.orange },
    { name: "Anthropic", val: "~$380B", detail: "Exploring IPO", color: C.gold },
    { name: "xAI", val: "~$250B", detail: "Elon Musk\u2019s AI venture", color: C.teal },
  ];

  labs.forEach((lab, i) => {
    const y = 1.6 + i * 0.85;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9.0, h: 0.75,
      fill: { color: C.white },
      line: { color: C.lightGray, width: 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.75,
      fill: { color: lab.color },
    });

    slide.addText(lab.name, {
      x: 0.8, y: y, w: 2.5, h: 0.75,
      fontSize: 16, color: C.black, bold: true, fontFace: FONT_HEAD, valign: "middle", margin: 0,
    });
    slide.addText(lab.val, {
      x: 3.5, y: y, w: 2.5, h: 0.75,
      fontSize: 28, color: lab.color, bold: true, fontFace: FONT_HEAD, align: "center", valign: "middle", margin: 0,
    });
    slide.addText("Valuation", {
      x: 3.5, y: y + 0.45, w: 2.5, h: 0.25,
      fontSize: 8, color: C.medGray, fontFace: FONT_BODY, align: "center", valign: "top", margin: 0,
    });
    slide.addText(lab.detail, {
      x: 6.5, y: y, w: 2.8, h: 0.75,
      fontSize: 12, color: C.darkGray, fontFace: FONT_BODY, align: "right", valign: "middle", margin: 0,
    });
  });

  addSource(slide, "Sources: PitchBook, press reports, company statements. Valuations as of Q1 2026.");
  addFooter(slide, 11);
}

// ─── SLIDE 12: Agentic AI (The Shift) ───────────────────────────
function slide12() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE SHIFTS", C.green);
  addHeadline(slide, "FROM CHATBOTS TO COWORKERS");

  addImagePlaceholder(slide, "IMAGE: chatbot vs. agent comparison illustration", 5.2, 0.2, 4.3, 1.3);

  // Left: Chatbots
  addChartTitle(slide, "Chatbots (2023\u20132024)", 0.5);

  slide.addText([
    { text: "Single query, human-in-the-loop", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    { text: "User types prompt, model responds", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    { text: "~1x compute per user", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    { text: "Limited tool integration", options: { bullet: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 1.95, w: 4.3, h: 1.3, valign: "top", margin: 0,
  });

  // Right: Agents
  addChartTitle(slide, "Agents (2025+)", 5.2);

  slide.addText([
    { text: "Multi-step autonomous workflows", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    { text: "Tool use: browse, code, execute", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    { text: "10\u2013100x more compute per user", options: { bullet: true, breakLine: true, fontSize: 10.5, color: C.orange, bold: true, fontFace: FONT_BODY } },
    { text: "Can replace entire workflows", options: { bullet: true, fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
  ], {
    x: 5.2, y: 1.95, w: 4.3, h: 1.3, valign: "top", margin: 0,
  });

  // Bottom takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.6, w: 9.0, h: 0.6,
    fill: { color: C.darkGray },
  });
  slide.addText("Implication: Inference compute demand explodes. Software vendors must adapt or be replaced.", {
    x: 0.7, y: 3.6, w: 8.6, h: 0.6,
    fontSize: 12.5, color: C.white, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: Industry analysis, OpenAI, Anthropic product updates.");
  addFooter(slide, 12);
}

// ─── SLIDE 13: Hardware vs. Software (The Great Divergence) ──────
function slide13() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE SHIFTS", C.green);
  addHeadline(slide, "THE GREAT DIVERGENCE");

  // Left: Hardware winners
  addChartTitle(slide, "Hardware Winners", 0.5);

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 4.3, h: 0.35,
    fill: { color: C.green },
  });
  slide.addText("SOXX (Semiconductor ETF) +13% YTD", {
    x: 0.5, y: 1.95, w: 4.3, h: 0.35,
    fontSize: 11, color: C.white, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
  });

  const hwWinners = [
    { name: "Micron", val: "+62%" },
    { name: "Samsung", val: "+57%" },
    { name: "SK Hynix", val: "+49%" },
    { name: "TSMC", val: "+20%" },
  ];

  hwWinners.forEach((item, i) => {
    const y = 2.45 + i * 0.4;
    slide.addText(item.val, {
      x: 0.5, y: y, w: 1.2, h: 0.35,
      fontSize: 14, color: C.green, bold: true, fontFace: FONT_HEAD, align: "right", valign: "middle", margin: 0,
    });
    slide.addText(item.name, {
      x: 1.8, y: y, w: 3.0, h: 0.35,
      fontSize: 11, color: C.darkGray, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
  });

  // Right: Software losers
  addChartTitle(slide, "Software Losers", 5.2);

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.95, w: 4.3, h: 0.35,
    fill: { color: C.red },
  });
  slide.addText("IGV (Software ETF) -20% YTD", {
    x: 5.2, y: 1.95, w: 4.3, h: 0.35,
    fontSize: 11, color: C.white, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
  });

  const swLosers = [
    { name: "Salesforce", val: "-30%" },
    { name: "Adobe", val: "-27%" },
    { name: "Shopify", val: "-26%" },
    { name: "Intuit", val: "-20%" },
    { name: "Microsoft", val: "-17%" },
    { name: "ServiceNow", val: "-11%" },
  ];

  swLosers.forEach((item, i) => {
    const y = 2.45 + i * 0.33;
    slide.addText(item.val, {
      x: 5.2, y: y, w: 1.2, h: 0.3,
      fontSize: 13, color: C.red, bold: true, fontFace: FONT_HEAD, align: "right", valign: "middle", margin: 0,
    });
    slide.addText(item.name, {
      x: 6.5, y: y, w: 3.0, h: 0.3,
      fontSize: 10, color: C.darkGray, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
  });

  // Bottom line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.15, w: 9.0, h: 0.3,
    fill: { color: "FFF3E0" },
  });
  slide.addText("Memory supercycle vs. SaaS decline \u2014 the same AI wave is bifurcating the market.", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.3,
    fontSize: 10.5, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: Bloomberg, as of March 2026. YTD returns.");
  addFooter(slide, 13);
}

// ─── SLIDE 14: Is This a Bubble? ────────────────────────────────
function slide14() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE RISKS", C.red);
  addHeadline(slide, "IS THIS A BUBBLE?");
  addSubhead(slide, "Comparing the Dotcom era (2000) to the AI buildout (2026).");

  addFullChartTitle(slide, "Dotcom 2000 vs. AI 2026");

  const tableRows = [
    [
      { text: "Dimension", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY } },
      { text: "Dotcom 2000", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "center" } },
      { text: "AI 2026", options: { fill: { color: C.black }, color: C.white, bold: true, fontSize: 9, fontFace: FONT_BODY, align: "center" } },
    ],
    [
      { text: "Valuations", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "Nasdaq P/E > 100x\nSpeculative, revenue-free IPOs", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
      { text: "Mag-7 P/E ~30x\nPremium but earnings-backed", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
    ],
    [
      { text: "Profitability", options: { fontSize: 9, fontFace: FONT_BODY, bold: true, fill: { color: "F9F9F9" } } },
      { text: "Most companies burned cash\nNegative unit economics", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "NVIDIA: 75% gross margin\nHypercalers: profitable + FCF positive", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
    ],
    [
      { text: "Supply/Demand", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "Build-it-and-they-will-come\nOverbuilt fiber, underused", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
      { text: "Demand > supply for GPUs, HBM\nWait lists, not gluts", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
    ],
    [
      { text: "Balance Sheets", options: { fontSize: 9, fontFace: FONT_BODY, bold: true, fill: { color: "F9F9F9" } } },
      { text: "Leveraged, fragile\nDependent on equity markets", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
      { text: "Mag-7: $500B+ net cash\nSelf-funding capex from operations", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center", fill: { color: "F9F9F9" } } },
    ],
    [
      { text: "Revenue Growth", options: { fontSize: 9, fontFace: FONT_BODY, bold: true } },
      { text: "Hype-driven, collapse followed\nRevenue often fictional", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
      { text: "NVIDIA: $130B+ revenue\nCloud AI revenue doubling annually", options: { fontSize: 8.5, fontFace: FONT_BODY, align: "center" } },
    ],
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.95, w: 9.0, colW: [1.8, 3.6, 3.6],
    border: { pt: 0.5, color: C.lightGray },
    margin: [3, 5, 3, 5],
  });

  slide.addText("Not a repeat of 2000 \u2014 but pockets of excess exist.", {
    x: 0.5, y: 4.2, w: 9.0, h: 0.25,
    fontSize: 11, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: Bloomberg, Refinitiv, company filings.");
  addFooter(slide, 14);
}

// ─── SLIDE 15: Supply Chain Risk ─────────────────────────────────
function slide15() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE RISKS", C.red);
  addHeadline(slide, "SUPPLY CHAIN FRAGILITY");
  addSubhead(slide, "Three critical risk vectors threatening the AI buildout.");

  // Three columns
  const risks = [
    {
      title: "Geographic Concentration",
      color: C.orange,
      points: [
        "Taiwan (TSMC): ~90% advanced chips",
        "South Korea: ~70% DRAM, ~62% HBM",
        "Netherlands (ASML): sole EUV supplier",
        "Single points of failure across the stack",
      ],
    },
    {
      title: "US Reshoring",
      color: C.gold,
      points: [
        "CHIPS Act: $52.7B authorized",
        "~$33.7B committed so far",
        "TSMC Arizona: delayed, over budget",
        "Still years from meaningful capacity",
      ],
    },
    {
      title: "Energy / Hormuz Crisis",
      color: C.red,
      points: [
        "Feb 28\u2013Mar 16 escalation timeline",
        "Oil to $126/bbl",
        "Qatar helium supply disrupted",
        "S. Korea: 64.7% helium from Qatar",
      ],
    },
  ];

  risks.forEach((risk, i) => {
    const x = 0.5 + i * 3.1;
    const w = 2.9;

    // Header bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.5, w: w, h: 0.35,
      fill: { color: risk.color },
    });
    slide.addText(risk.title, {
      x: x, y: 1.5, w: w, h: 0.35,
      fontSize: 10, color: C.white, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
    });

    // Bullet points
    const bulletItems = risk.points.map((pt, j) => ({
      text: pt,
      options: { bullet: true, fontSize: 9.5, color: C.darkGray, fontFace: FONT_BODY, breakLine: j < risk.points.length - 1 },
    }));
    slide.addText(bulletItems, {
      x: x, y: 1.95, w: w, h: 1.8, valign: "top", margin: [3, 5, 3, 10],
    });
  });

  // Scenario strip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.85, w: 9.0, h: 0.55,
    fill: { color: C.darkGray },
  });
  slide.addText([
    { text: "Hormuz Scenarios:  ", options: { bold: true, fontSize: 9, color: C.white, fontFace: FONT_BODY } },
    { text: "2-week resolution (minimal)  |  ", options: { fontSize: 9, color: C.green, fontFace: FONT_BODY } },
    { text: "2\u20138 weeks (spot +40\u201360%)  |  ", options: { fontSize: 9, color: C.gold, fontFace: FONT_BODY } },
    { text: "Equipment damage at Ras Laffan (1+ year structural shortage)", options: { fontSize: 9, color: C.red, fontFace: FONT_BODY } },
  ], {
    x: 0.7, y: 3.85, w: 8.6, h: 0.55, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: SIA, CHIPS Act tracker, Reuters, USGS.");
  addFooter(slide, 15);
}

// ─── SLIDE 16: Policy & Regulation ───────────────────────────────
function slide16() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE RISKS", C.red);
  addHeadline(slide, "POLICY IS RESHAPING THE MAP");

  // Dark banner with 3 cards
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 1.3, w: 10.0, h: 3.1,
    fill: { color: C.darkGray },
  });

  slide.addText("THE POLICY LANDSCAPE", {
    x: 0.5, y: 1.35, w: 5.0, h: 0.3,
    fontSize: 9, color: C.gold, bold: true, fontFace: FONT_BODY, charSpacing: 3, valign: "middle", margin: 0,
  });

  const pillars = [
    {
      title: "Export Controls",
      stat: "$5.5B",
      statLabel: "NVIDIA H20 write-down",
      detail: "H100/H200/Blackwell banned from China. ASML advanced DUV tools banned.",
      color: C.orange,
    },
    {
      title: "AI Regulation",
      stat: "Aug 2026",
      statLabel: "EU AI Act high-risk enforcement",
      detail: "Fines up to \u20AC35M or 7% global revenue. Only 36% of enterprises feel prepared.",
      color: C.gold,
    },
    {
      title: "Trade & Reshoring",
      stat: "~20%",
      statLabel: "SMIC 5nm yield vs. >70% threshold",
      detail: "China controls ~90% of rare earth processing.",
      color: C.red,
    },
  ];

  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    const w = 2.9;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.75, w: w, h: 2.4,
      fill: { color: "444444" },
    });
    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.75, w: w, h: 0.05,
      fill: { color: p.color },
    });

    slide.addText(p.title, {
      x: x + 0.15, y: 1.85, w: w - 0.3, h: 0.3,
      fontSize: 11, color: C.white, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    slide.addText(p.stat, {
      x: x + 0.15, y: 2.2, w: w - 0.3, h: 0.5,
      fontSize: 28, color: p.color, bold: true, fontFace: FONT_HEAD, valign: "middle", margin: 0,
    });
    slide.addText(p.statLabel, {
      x: x + 0.15, y: 2.7, w: w - 0.3, h: 0.25,
      fontSize: 8.5, color: "AAAAAA", fontFace: FONT_BODY, valign: "top", margin: 0,
    });
    slide.addText(p.detail, {
      x: x + 0.15, y: 3.05, w: w - 0.3, h: 0.9,
      fontSize: 9, color: C.white, fontFace: FONT_BODY, valign: "top", margin: 0,
    });
  });

  // Bottom line
  slide.addText("Policy has cleaved the AI supply chain into US-aligned and China-aligned blocs.", {
    x: 0.5, y: 4.45, w: 9.0, h: 0.25,
    fontSize: 10.5, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  addSource(slide, "Sources: BIS, EU AI Act text, NVIDIA filings, CSIS.", 0.5, 4.7);
  addFooter(slide, 16);
}

// ─── SLIDE 17: Political Challenges ──────────────────────────────
function slide17() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE RISKS", C.red);
  addHeadline(slide, "THE POLITICAL HEADWINDS");

  // Big stats
  makeSmallStat(slide, "$98B", "DC projects stalled by local opposition", 5.2, 0.15, 2.2, C.red);
  makeSmallStat(slide, "439K", "Worker shortage", 7.5, 0.15, 2.0, C.red);

  // Four risk categories
  const categories = [
    { title: "Local Opposition & Moratoriums", detail: "Virginia, Wisconsin, South Carolina moratoriums on new data centers" },
    { title: "Permitting & Regulatory Delays", detail: "NEPA adds 2\u20134 years. Grid queue: 2,600 GW" },
    { title: "Export Controls & Trade Policy", detail: "GPU bans, ASML restrictions, rare earth retaliation" },
    { title: "Sovereignty & Compliance", detail: "EU AI Act costs, data localization, CHIPS Act subsidies" },
  ];

  categories.forEach((cat, i) => {
    const y = 1.2 + i * 0.58;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.5,
      fill: { color: C.red },
    });
    slide.addText([
      { text: cat.title, options: { bold: true, fontSize: 10, color: C.black, fontFace: FONT_BODY, breakLine: true } },
      { text: cat.detail, options: { fontSize: 9, color: C.medGray, fontFace: FONT_BODY } },
    ], {
      x: 0.7, y: y, w: 8.8, h: 0.5, valign: "middle", margin: 0,
    });
  });

  // Permit timeline bar
  slide.addText("PERMIT TIMELINE", {
    x: 0.5, y: 3.55, w: 3.0, h: 0.25,
    fontSize: 9, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
  });

  const phases = [
    { label: "Site Selection\n3\u20136 mo", w: 1.5, color: C.green },
    { label: "Environmental Review\n12\u201348 mo", w: 3.0, color: C.gold },
    { label: "Grid Interconnection\n36\u201360 mo", w: 2.8, color: C.orange },
    { label: "Construction\n18\u201336 mo", w: 1.7, color: C.teal },
  ];

  let px = 0.5;
  phases.forEach((phase) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: px, y: 3.85, w: phase.w, h: 0.45,
      fill: { color: phase.color },
    });
    slide.addText(phase.label, {
      x: px, y: 3.85, w: phase.w, h: 0.45,
      fontSize: 8, color: C.white, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
    });
    px += phase.w;
  });

  addSource(slide, "Sources: McKinsey, DOE, PJM, state government records.");
  addFooter(slide, 17);
}

// ─── SLIDE 18: Computing Beyond Earth ────────────────────────────
function slide18() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE FRONTIER", C.teal);
  addHeadline(slide, "COMPUTING BEYOND EARTH");
  addSubhead(slide, "No permits. Unlimited solar. Compute above borders.");

  addImagePlaceholder(slide, "IMAGE: orbital data center or satellite constellation concept art", 5.2, 0.9, 4.3, 1.0);

  const concepts = [
    { name: "Starcloud", detail: "First H100 in space (Nov 2025), first LLM trained in orbit (Dec 2025), 88K-satellite filing", color: C.orange },
    { name: "SpaceX / xAI", detail: "FCC application for up to 1M orbital DC satellites (Jan 2026) after $1.25T merger", color: C.gold },
    { name: "Google Suncatcher", detail: "Radiation-hardened TPUs, 1.6 Tbps optical links", color: C.green },
    { name: "Aetherflux", detail: "$50M Series A, orbital compute + power beaming", color: C.teal },
  ];

  concepts.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 2.1 + row * 1.0;
    const w = 4.5;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: w, h: 0.85,
      fill: { color: C.white },
      line: { color: C.lightGray, width: 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: w, h: 0.05,
      fill: { color: c.color },
    });
    slide.addText(c.name, {
      x: x + 0.15, y: y + 0.1, w: w - 0.3, h: 0.3,
      fontSize: 11, color: C.black, bold: true, fontFace: FONT_BODY, valign: "middle", margin: 0,
    });
    slide.addText(c.detail, {
      x: x + 0.15, y: y + 0.4, w: w - 0.3, h: 0.4,
      fontSize: 9, color: C.medGray, fontFace: FONT_BODY, valign: "top", margin: 0,
    });
  });

  addSource(slide, "Sources: FCC filings, company announcements, TechCrunch.");
  addFooter(slide, 18);
}

// ─── SLIDE 19: Humanoid Robots (Physical AI) ────────────────────
function slide19() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE FRONTIER", C.teal);
  addHeadline(slide, "PHYSICAL AI");
  addSubhead(slide, "Humanoids are the next inference endpoints.");

  addImagePlaceholder(slide, "IMAGE: humanoid robot in warehouse/manufacturing setting", 5.2, 1.0, 4.3, 2.5);

  makeBigNumber(slide, "$38B", "Humanoid robot TAM by 2035", 0.5, 1.3, 4.3);

  slide.addText([
    { text: "Embodied Intelligence", options: { bold: true, fontSize: 12, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Foundation models are moving from screens to physical bodies. The same AI that powers chatbots will power robots that see, navigate, and manipulate the real world.", options: { fontSize: 10, color: C.darkGray, fontFace: FONT_BODY, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Key Players", options: { bold: true, fontSize: 11, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Tesla Optimus \u2022 Figure AI \u2022 Boston Dynamics \u2022 1X Technologies \u2022 Agility Robotics", options: { fontSize: 10, color: C.medGray, fontFace: FONT_BODY, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Applications", options: { bold: true, fontSize: 11, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Manufacturing \u2022 Warehousing & logistics \u2022 Healthcare \u2022 Construction \u2022 Hazardous environments", options: { fontSize: 10, color: C.medGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 2.3, w: 4.5, h: 2.0, valign: "top", margin: 0,
  });

  addSource(slide, "Sources: Goldman Sachs, company announcements.");
  addFooter(slide, 19);
}

// ─── SLIDE 20: Self-Driving Vehicles ─────────────────────────────
function slide20() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE FRONTIER", C.teal);
  addHeadline(slide, "AUTONOMOUS MOBILITY");

  addImagePlaceholder(slide, "IMAGE: autonomous vehicle or Waymo on city street", 5.2, 1.0, 4.3, 2.5);

  makeBigNumber(slide, "2M+", "Waymo autonomous rides per month", 0.5, 1.3, 4.3);

  slide.addText([
    { text: "The Safety Case Is Improving", options: { bold: true, fontSize: 12, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Waymo\u2019s autonomous vehicles now have millions of miles of real-world data showing significantly fewer crashes than human drivers per mile.", options: { fontSize: 10, color: C.darkGray, fontFace: FONT_BODY, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Continuous Learning Flywheel", options: { bold: true, fontSize: 11, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Every mile driven generates training data. More data \u2192 better models \u2192 safer driving \u2192 more cities \u2192 more data.", options: { fontSize: 10, color: C.medGray, fontFace: FONT_BODY, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Leaders", options: { bold: true, fontSize: 11, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
    { text: "Waymo (Alphabet) \u2022 Tesla FSD \u2022 Cruise (GM) \u2022 Baidu Apollo \u2022 Mobileye (Intel)", options: { fontSize: 10, color: C.medGray, fontFace: FONT_BODY } },
  ], {
    x: 0.5, y: 2.3, w: 4.5, h: 2.0, valign: "top", margin: 0,
  });

  addSource(slide, "Sources: Waymo safety reports, company disclosures.");
  addFooter(slide, 20);
}

// ─── SLIDE 21: Healthcare AI ─────────────────────────────────────
function slide21() {
  const slide = pres.addSlide();
  addThemeTag(slide, "THE FRONTIER", C.teal);
  addHeadline(slide, "AI IN HEALTHCARE");

  addImagePlaceholder(slide, "IMAGE: AI-assisted medical imaging or drug discovery visualization", 0.5, 1.0, 9.0, 1.0);

  const areas = [
    {
      title: "Drug Discovery",
      detail: "AI models can screen billions of molecular combinations in hours vs. years. Insilico Medicine, Recursion, and Isomorphic Labs leading the charge.",
      color: C.orange,
    },
    {
      title: "Medical Imaging",
      detail: "AI reads radiology scans with superhuman accuracy for specific conditions. FDA has approved 900+ AI medical devices.",
      color: C.gold,
    },
    {
      title: "Precision Medicine",
      detail: "Genomic analysis + AI = personalized treatment plans. From one-size-fits-all to treatments tailored to your DNA.",
      color: C.green,
    },
  ];

  areas.forEach((area, i) => {
    const x = 0.5 + i * 3.1;
    const w = 2.9;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.2, w: w, h: 0.35,
      fill: { color: area.color },
    });
    slide.addText(area.title, {
      x: x, y: 2.2, w: w, h: 0.35,
      fontSize: 11, color: C.white, bold: true, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0,
    });
    slide.addText(area.detail, {
      x: x, y: 2.65, w: w, h: 1.4,
      fontSize: 9.5, color: C.darkGray, fontFace: FONT_BODY, valign: "top", margin: [3, 5, 3, 5],
    });
  });

  addSource(slide, "Sources: FDA, Nature, company disclosures.");
  addFooter(slide, 21);
}

// ─── SLIDE 22: Key Takeaways ─────────────────────────────────────
function slide22() {
  const slide = pres.addSlide();
  addHeadline(slide, "KEY TAKEAWAYS");

  const takeaways = [
    {
      num: "01",
      title: "The capex cycle is real and financing itself.",
      body: "$685B in 2026. These companies have the cash flows to sustain it.",
      color: C.orange,
    },
    {
      num: "02",
      title: "Follow the atoms, not the bits (for now).",
      body: "Semiconductors and memory are the immediate winners. Software\u2019s reckoning is underway.",
      color: C.gold,
    },
    {
      num: "03",
      title: "Bottlenecks shift.",
      body: "Today it\u2019s power and HBM. Tomorrow it could be helium, packaging, or regulatory gridlock.",
      color: C.green,
    },
    {
      num: "04",
      title: "Get intentional about exposure.",
      body: "AI is not one trade \u2014 it\u2019s an entire supply chain. Pick your layer.",
      color: C.teal,
    },
  ];

  takeaways.forEach((t, i) => {
    const y = 1.1 + i * 0.8;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.05, w: 0.5, h: 0.5,
      fill: { color: t.color },
    });
    slide.addText(t.num, {
      x: 0.5, y: y + 0.05, w: 0.5, h: 0.5,
      fontSize: 16, color: C.white, bold: true, fontFace: FONT_HEAD, align: "center", valign: "middle", margin: 0,
    });

    // Text
    slide.addText([
      { text: t.title, options: { bold: true, fontSize: 13, color: C.black, fontFace: FONT_HEAD, breakLine: true } },
      { text: t.body, options: { fontSize: 10.5, color: C.darkGray, fontFace: FONT_BODY } },
    ], {
      x: 1.2, y: y, w: 8.3, h: 0.7, valign: "middle", margin: 0,
    });
  });

  addSource(slide, "AI Markets \u2014 March 2026");
  addFooter(slide, 22);
}

// ─── Build ───────────────────────────────────────────────────────
slide01();
slide02();
slide03();
slide04();
slide05();
slide06();
slide07();
slide08();
slide09();
slide10();
slide11();
slide12();
slide13();
slide14();
slide15();
slide16();
slide17();
slide18();
slide19();
slide20();
slide21();
slide22();

pres.writeFile({ fileName: "AI-Markets-March-2026.pptx" })
  .then(() => console.log("Done: AI-Markets-March-2026.pptx"))
  .catch((err) => console.error("Error:", err));
