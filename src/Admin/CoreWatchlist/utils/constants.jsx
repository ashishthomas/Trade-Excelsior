export const TREND_COLORS = { strong: "green", medium: "blue", weak: "red" };

export const MONTHS = Array.from({ length: 24 }, (_, index) => {
  const date = new Date();
  date.setMonth(date.getMonth() - index);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
});
