function getDaysInMonth(year: number, month: number): number[] {
  // month is 0-based (0 = January, 11 = December)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the month
  return Array.from({ length: daysInMonth }, (_, i) => i + 1); // Create a list of days
}

function getDaysInMonthFromDate(date: Date): number[] {
  return getDaysInMonth(date.getFullYear(), date.getMonth());
}

export const dateHelper = {
  getDaysInMonth,
  getDaysInMonthFromDate,
};
