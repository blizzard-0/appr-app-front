const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getSanitizedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${MONTH_LABELS[month]}. ${day}, ${year}`;
};
