export default {
  request: {
    domain: "",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  },
  rent: {
    cashUnit: '$',
    leaseTypeByMonth: 0,
    leaseTypeByWeek: 1,
    leaseTypeByDay: 2,
    leaseTypeList: [
      {
        label: "leaseByMonth",
        value: 0,
      },
      {
        label: "leaseByWeek",
        value: 1,
      },
      {
        label: "leaseByDay",
        value: 2,
      },
    ],
  },
};
