/* =============================================================
   publications.js - papers and patents.

   category : "international" | "domestic"   -> which section it lands in
   year     : number, or null if not yet filled in
   authors  : wrap a lab member's name in ** ** to highlight it
   links    : [] if there is no DOI/PDF link yet

   The first three entries in this list also appear on the home page,
   so keep the ones you most want seen at the top.
   ============================================================= */
const PUBLICATIONS = [
  {
    category: "international",
    year: null,                                  // TODO
    type: "journal",
    title: "A 7.6-GHz Fractional-N Digital PLL with Time Amplifier-Based Time-to-Digital Converter",
    authors: "**Yekwang Choi**, Youngsik Kim, and **Shinwoong Kim**",
    venue: "Journal of Semiconductor Technology and Science",
    links: []
  },
  {
    category: "international",
    year: null,                                  // TODO
    type: "journal",
    title: "A 1.12-ps Resolution Flash ADC-assisted Coarse-to-fine Time-to-digital Converter with Adaptive Reference-voltage Calibration and Digital Linearity Correction",
    authors: "**Solmon Shin**, Hyunwoo Son, Youngsik Kim, and **Shinwoong Kim**",
    venue: "Journal of Semiconductor Technology and Science",
    links: []
  },
  {
    category: "international",
    year: null,                                  // TODO
    type: "journal",
    title: "A 4-5 GHz Sub-Sampling PLL with TDC-Free Digital Coarse Loop",
    authors: "**Jaeyoon Jang**, Youngsik Kim, and **Shinwoong Kim**",
    venue: "Electronics",
    links: []
  },
  {
    category: "international",
    year: 2025,
    type: "journal",
    title: "A 13-GHz Analog Fractional-N Sampling PLL With a Calibration-Assisted Seamless Loop-Switching Technique",
    authors: "**Seojin Kim**, Youngsik Kim, and **Shinwoong Kim**",
    venue: "Journal of Semiconductor Technology and Science, Vol. 25, No. 3, pp. 292-300",
    links: [{ label: "DOI", url: "https://doi.org/10.5573/JSTS.2025.25.3.292" }]
  },
  {
    category: "international",
    year: 2024,
    type: "journal",
    title: "A Fully Synthesizable Fractional-N Digital Phase-Locked Loop with a Calibrated Dual-Referenced Interpolating Time-to-Digital Converter to Compensate for Process-Voltage-Temperature Variations",
    authors: "**Seojin Kim**, Youngsik Kim, Hyunwoo Son, and **Shinwoong Kim**",
    venue: "Electronics, Vol. 13, No. 18, 3598",
    links: [{ label: "DOI", url: "https://doi.org/10.3390/electronics13183598" }]
  },
  {
    category: "domestic",
    year: null,                                  // TODO
    type: "journal",
    title: "ADC 기반 TDC 비선형성 보정을 위한 기울기 보정 기법",
    authors: "**최예광**, 김영식, **김신웅**",
    venue: "전기전자학회논문지",
    links: []
  },
  {
    category: "domestic",
    year: 2023,
    type: "journal",
    title: "저면적 디지털 제어 발진기의 양자화 에러 최소화를 위한 추가 서모미터 코드 잠금 기법",
    authors: "**강병석**, 김영식, **김신웅**",
    venue: "전기전자학회논문지, 제27권 제4호, pp. 206-211",
    links: []
  },
  {
    category: "domestic",
    year: 2023,
    type: "journal",
    title: "딕슨 정류기를 이용한 433MHz 초저전력 Wake-Up 수신기 설계",
    authors: "장성민, **김신웅**, 김영식",
    venue: "한국전자파학회논문지, 제34권 제4호, pp. 289-302",
    links: []
  }
];
