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

// Example usage:
const result = getDateMonthTime('2025-02-15T09:00:00');
console.log(result);
// Output: { date: 15, month: 'February', time: '09:00 AM' }
