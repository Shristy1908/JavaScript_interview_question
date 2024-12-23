const data = {
  cluster: 
  [
    {
      flights: 4,
      profit: 5245,
      clv: 2364,
      segment: [
        {
          flights: 2,
          profit: 2150,
          clv: 1564,
          node: [
            { xpos: 1, ypos: 2 },
            { xpos: 3, ypos: 4 },
          ],
        },
        {
          flights: 1,
          profit: 1000,
          clv: 500,
          node: [{ xpos: 5, ypos: 6 }],
        },
      ],
    },
    {
      flights: 3,
      profit: 4000,
      clv: 3000,
      segment: [
        {
          flights: 2,
          profit: 2000,
          clv: 1500,
          node: [{ xpos: 7, ypos: 8 }],
        },
      ],
    },
  ],
};

data.cluster.forEach((element) => {
  console.log(
    "Direct Elements: " +
      element.flights +
      " " +
      element.profit +
      " " +
      element.clv
  );
  element.segment.forEach((ele) => {
    console.log(
      "Nested Elements: " + ele.flights + " " + ele.profit + " " + ele.clv
    );
  });
});
