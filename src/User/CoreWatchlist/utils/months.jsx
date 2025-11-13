// Create an array of 24 months with current and past months
const months = Array.from({ length: 24 }, (_, index) => {
  const date = new Date();
  date.setMonth(date.getMonth() - index);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
});

export default months;
