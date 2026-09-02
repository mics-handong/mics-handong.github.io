/* =============================================================
   research.js - research areas.
   Add or remove entries freely; the pages adapt automatically.
   ============================================================= */
const RESEARCH = [
  {
    title: "Fractional-N Digital PLLs & Frequency Synthesis",
    summary: "All-digital and sampling PLL architectures for low-jitter, low-spur clock generation from a few GHz up to 13 GHz.",
    detail: "We build fractional-N digital PLLs and all-digital frequency synthesizers, separating the roles of the control blocks - DCO, delta-sigma modulator, and TDC/DTC - so that each can be optimized on its own terms. Across wide tuning ranges, multi-loop architectures keep loop switching stable while digital modules are reused to hold the area down. Recent designs include a 13-GHz analog fractional-N sampling PLL with seamless loop switching and a 4-5 GHz sub-sampling PLL that removes the TDC from the coarse loop entirely."
  },
  {
    title: "Time-to-Digital Converters & Calibration",
    summary: "High-resolution TDC architectures, and the calibration schemes that keep them linear across PVT variation.",
    detail: "Timing resolution sets the noise floor of a digital PLL, so we design TDCs that push resolution down to the picosecond range - time-amplifier-based and flash-ADC-assisted coarse-to-fine structures among them. Just as important is what happens after fabrication: adaptive reference-voltage calibration and digital linearity correction recover the accuracy that PVT variation and quantization error would otherwise cost."
  },
  {
    title: "Machine Learning for Mixed-Signal Design",
    summary: "Neural surrogate models that predict PLL performance from design parameters, and invert a target spec back into a design point.",
    detail: "Simulating a PLL across its full design space is expensive, so we train neural networks on large simulation sweeps to stand in for the simulator. Forward models predict spur level and phase noise from a set of design parameters in milliseconds; inverse models run the other direction, mapping a target specification back to the parameters that meet it. The aim is to shorten the loop between a specification and a first working design point."
  }
];
