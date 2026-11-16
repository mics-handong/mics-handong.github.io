/* =============================================================
   publications.js - papers.

   category : "international" | "domestic"   -> which section it lands in
   year     : number, or null if not yet filled in
   month    : 1-12, or null if unknown (only used for display and ordering)
   authors  : wrap a lab member's name in ** ** to highlight it
   venue    : journal / conference name, shown in italics
   abbr     : short name shown in bold after the venue, "" for none
   detail   : volume, issue, pages - written out as it should appear
   url      : link to the paper (DOI preferred), "" if none yet

   The page groups papers by section and year, newest first.
   The first three entries in this list also appear on the home page,
   so keep the newest ones at the top.
   ============================================================= */
const PUBLICATIONS = [
  /* ---------- international ---------- */
  {
    category: "international", year: 2026, month: 4,
    title:   "A 7.6-GHz Fractional-N Digital PLL with Time Amplifier-based Time-to-digital Converter",
    authors: "**Yekwang Choi**, Youngsik Kim, and **Shinwoong Kim**",
    venue:   "Journal of Semiconductor Technology and Science", abbr: "JSTS",
    detail:  "vol. 26, no. 2, pp. 141-149",
    url:     "https://doi.org/10.5573/JSTS.2026.26.2.141"
  },
  {
    category: "international", year: 2025, month: 12,
    title:   "A 1.12-ps Resolution Flash ADC-assisted Coarse-to-fine Time-to-digital Converter with Adaptive Reference-voltage Calibration and Digital Linearity Correction",
    authors: "**Solmon Shin**, Hyunwoo Son, Youngsik Kim, and **Shinwoong Kim**",
    venue:   "Journal of Semiconductor Technology and Science", abbr: "JSTS",
    detail:  "vol. 25, no. 6, pp. 711-720",
    url:     "https://doi.org/10.5573/JSTS.2025.25.6.711"
  },
  {
    category: "international", year: 2025, month: 11,
    title:   "A 4-5 GHz Sub-Sampling PLL with TDC-Free Digital Coarse Loop",
    authors: "**Jaeyun Jang**, Youngsik Kim, and **Shinwoong Kim**",
    venue:   "Electronics", abbr: "",
    detail:  "vol. 14, no. 23, 4558",
    url:     "https://doi.org/10.3390/electronics14234558"
  },
  {
    category: "international", year: 2025, month: 6,
    title:   "A 13-GHz Analog Fractional-N Sampling PLL With a Calibration-Assisted Seamless Loop-Switching Technique",
    authors: "**Seojin Kim**, Youngsik Kim, and **Shinwoong Kim**",
    venue:   "Journal of Semiconductor Technology and Science", abbr: "JSTS",
    detail:  "vol. 25, no. 3, pp. 292-300",
    url:     "https://doi.org/10.5573/JSTS.2025.25.3.292"
  },
  {
    category: "international", year: 2024, month: 9,
    title:   "A Fully Synthesizable Fractional-N Digital Phase-Locked Loop with a Calibrated Dual-Referenced Interpolating Time-to-Digital Converter to Compensate for Process-Voltage-Temperature Variations",
    authors: "**Seojin Kim**, Youngsik Kim, Hyunwoo Son, and **Shinwoong Kim**",
    venue:   "Electronics", abbr: "",
    detail:  "vol. 13, no. 18, 3598",
    url:     "https://doi.org/10.3390/electronics13183598"
  },
  {
    category: "international", year: 2019, month: 1,
    title:   "A 0.0043-mm² 0.3-1.2-V Frequency-Scalable Synthesized Fractional-N Digital PLL With a Speculative Dual-Referenced Interpolating TDC",
    authors: "Minseob Lee, **Shinwoong Kim**, Hong-June Park, and Jae-Yoon Sim",
    venue:   "IEEE Journal of Solid-State Circuits", abbr: "JSSC",
    detail:  "vol. 54, no. 1, pp. 99-108",
    url:     "https://doi.org/10.1109/JSSC.2018.2876464"
  },
  {
    category: "international", year: 2018, month: 2,
    title:   "A 0.3-to-1.2V Frequency-Scalable Fractional-N ADPLL with a Speculative Dual-Referenced Interpolating TDC",
    authors: "Minseob Lee, **Shinwoong Kim**, Hwasuk Cho, Jahyun Koo, Kwang-Hee Choi, Jin-Hyeok Choi, Byungsub Kim, Hong-June Park, and Jae-Yoon Sim",
    venue:   "IEEE International Solid-State Circuits Conference", abbr: "ISSCC",
    detail:  "pp. 122-124",
    url:     "https://doi.org/10.1109/ISSCC.2018.8310214"
  },
  {
    category: "international", year: 2017, month: 2,
    title:   "A 250-µW 2.4-GHz Fast-Lock Fractional-N Frequency Generation for Ultralow-Power Applications",
    authors: "Seunghwan Hong, **Shinwoong Kim**, Seungnam Choi, Hwasuk Cho, Jaehyeong Hong, Young-Hun Seo, Byungsub Kim, Hong-June Park, and Jae-Yoon Sim",
    venue:   "IEEE Transactions on Circuits and Systems II: Express Briefs", abbr: "TCAS-II",
    detail:  "vol. 64, no. 2, pp. 106-110",
    url:     "https://doi.org/10.1109/TCSII.2016.2551598"
  },
  {
    category: "international", year: 2016, month: 2,
    title:   "A 2 GHz Synthesized Fractional-N ADPLL With Dual-Referenced Interpolating TDC",
    authors: "**Shinwoong Kim**, Seunghwan Hong, Kapseok Chang, Hyungsik Ju, Jaewook Shin, Byungsub Kim, Hong-June Park, and Jae-Yoon Sim",
    venue:   "IEEE Journal of Solid-State Circuits", abbr: "JSSC",
    detail:  "vol. 51, no. 2, pp. 391-400",
    url:     "https://doi.org/10.1109/JSSC.2015.2494365"
  },

  /* ---------- domestic ---------- */
  {
    category: "domestic", year: 2025, month: null,
    title:   "ADC 기반 TDC 비선형성 보정을 위한 기울기 보정 기법",
    authors: "**최예광**, 김영식, **김신웅**",
    venue:   "전기전자학회논문지", abbr: "",
    detail:  "제29권 제4호, pp. 662-667",
    url:     "https://doi.org/10.7471/ikeee.2025.29.4.662"
  },
  {
    category: "domestic", year: 2023, month: 12,
    title:   "저면적 디지털 제어 발진기의 양자화 에러 최소화를 위한 추가 서모미터 코드 잠금 기법",
    authors: "**강병석**, 김영식, **김신웅**",
    venue:   "전기전자학회논문지", abbr: "",
    detail:  "제27권 제4호, pp. 573-578",
    url:     "https://doi.org/10.7471/ikeee.2023.27.4.573"
  },
  {
    category: "domestic", year: 2023, month: 4,
    title:   "딕슨 정류기를 이용한 433MHz 초저전력 Wake-Up 수신기 설계",
    authors: "장성민, **김신웅**, 김영식",
    venue:   "한국전자파학회논문지", abbr: "",
    detail:  "제34권 제4호, pp. 289-302",
    url:     "https://doi.org/10.5515/KJKIEES.2023.34.4.289"
  },
  {
    category: "domestic", year: 2022, month: 12,
    title:   "디지털 위상고정루프의 시스템 모델링 및 검증 방법 소개",
    authors: "**김신웅**",
    venue:   "전기전자학회논문지", abbr: "",
    detail:  "제26권 제4호, pp. 577-583",
    url:     "https://doi.org/10.7471/ikeee.2022.26.4.577"
  }
];
