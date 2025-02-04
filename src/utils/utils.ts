export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getDateMonthTime(dateString: string): {
  date: number;
  month: string;
  time: string;
  year: number;
} {
  const dateObj = new Date(dateString);

  // Ensure the date is valid
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date string');
  }
  if (!dateString) {
    throw Error(' A date string is meant to be passed in here!');
  }

  const date = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' }); // Full month name
  const time = dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const year = dateObj.getFullYear();

  return { date, month, time, year };
}
