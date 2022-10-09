export default {
  request: {
    domain: "",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  },
  rent: {
    rentPeriodTypeByMonth: 0,
    rentPeriodTypeByWeek: 1,
    rentPeriodTypeByDay: 2,
    rentPeriodTypeList: [
      {
        label: "periodByMonth",
        value: 0,
      },
      {
        label: "periodByWeek",
        value: 1,
      },
      {
        label: "periodByDay",
        value: 2,
      },
    ],
  },
};
