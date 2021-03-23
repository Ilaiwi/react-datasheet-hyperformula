export default [
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Quality Inspection" },
    { value: "" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Product Sku:" },
    { value: "KA -12435" },
    { value: "Company:" },
    { value: "Acme Inc" }
  ],
  [
    { value: "Product QTy:" },
    { value: "34" },
    { value: "Yield Error:" },
    { value: "0.2" }
  ],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "Yield" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Product Defects:" },
    { value: "=B4 * D4" },
    { value: "Product Sku:" },
    { value: "=B3" }
  ],
  [
    { value: "Report No.:" },
    { value: '=B3&"-"&D1&"-"&B4' },
    { value: "" },
    { value: "" }
  ],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "Product Totals" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Part 1" },
    { value: "1" },
    { value: "Defects (Part 1):" },
    { value: "0" }
  ],
  [
    { value: "Part 2" },
    { value: "23" },
    { value: "Defects (Part 2):" },
    { value: "3" }
  ],
  [
    { value: "Part 3" },
    { value: "24" },
    { value: "Defects (Part 3):" },
    { value: "5" }
  ],
  [
    { value: "Part 4" },
    { value: "46" },
    { value: "Defects (Part 4):" },
    { value: "6" }
  ],
  [
    { value: "Part 5" },
    { value: "32" },
    { value: "Defects (Part 5):" },
    { value: "4" }
  ],
  [
    { value: "Total:" },
    { value: "=SUM(B11:B15)" },
    { value: "Defect Total:" },
    { value: "=SUM(D11:D15)" }
  ],
  [
    { value: "Net Total:" },
    { value: "=B16-D16" },
    { value: "" },
    { value: "" }
  ],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Yield Calculation:" },
    { value: "" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Part 1" },
    { value: "=B11+(B11*0.1)" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Part 2" },
    { value: "=B12+(B12*0.1)" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Part 3" },
    { value: "=B13+(B13*0.1)" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Part 4" },
    { value: "=B14+(B14*0.1)" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "Part 5" },
    { value: "=B15+(B15*0.1)" },
    { value: "" },
    { value: "" }
  ],
  [
    { value: "TOTAL " },
    { value: "" },
    { value: "DEFECT TOTALS" },
    { value: "" }
  ],
  [
    { value: "MIN" },
    { value: "=MIN(B11:B15)" },
    { value: "MIN" },
    { value: "=MIN(D11:D15)" }
  ],
  [
    { value: "MEAN" },
    { value: "=AVERAGE(B11:B15)" },
    { value: "MEAN" },
    { value: "=AVERAGE(D11:D15)" }
  ],
  [
    { value: "MAX" },
    { value: "=MAX(B11:B15)" },
    { value: "MAX" },
    { value: "=MAX(D11:D15)" }
  ],
  [
    { value: "STD DEV" },
    { value: "=STDEV.S(B11:B15)" },
    { value: "STD DEV" },
    { value: "=STDEV.S(D11:D15)" }
  ],
  [
    { value: "AVG STD DEV From Mean" },
    { value: "=AVEDEV(B11:B15)" },
    { value: "AVG STD DEV From Mean" },
    { value: "=AVEDEV(D11:D15)" }
  ],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Percentage STDV from last month" },
    { value: "=(B30-10)/10" },
    { value: "" },
    { value: "" }
  ],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [
    { value: "Company Name + SKU" },
    { value: '=D3&"-"&"-"&B3' },
    { value: "" },
    { value: "" }
  ]
];
