export const SystemValue = {
  DEFAULT_PASSWORD_MEMBER: '123456',
  DEFAULT_COMMISSION: 5,
  TIME_OUT_NOTIFICATION: 3 * 1000,
  DATE_RECURRING_ORDER: {
    //daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysOfWeek: [2, 3, 4, 5, 6, 7, 8],
    dayOfMonth: Array.from({ length: 28 }).map((_, idx) => idx + 1),
  },
};
