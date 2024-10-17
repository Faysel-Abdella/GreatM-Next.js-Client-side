const demo = [
  {
    number: 1,
    paymentDate: "YYYY-MM-DD",
    expirationDate: "YYYY-MM-DD",
    paymentMethod: "결제수단",
    amount: "0,000원",
  },
];

const row1Column3 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row1Column3;
