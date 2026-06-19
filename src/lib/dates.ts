const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatYearMonth(input: string | undefined | null): string {
  if (!input) return "";
  const [year, month] = input.split("-");
  if (!year) return "";
  if (!month) return year;
  const monthIndex = Number.parseInt(month, 10) - 1;
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) return year;
  return `${MONTHS[monthIndex]} ${year}`;
}

export function compareYearMonthDesc(a: string, b: string): number {
  return b.localeCompare(a);
}

export function isExpired(expiresOn: string | undefined): boolean {
  if (!expiresOn) return false;
  const [yearStr, monthStr = "12"] = expiresOn.split("-");
  const year = Number.parseInt(yearStr, 10);
  const month = Number.parseInt(monthStr, 10);
  if (Number.isNaN(year) || Number.isNaN(month)) return false;
  const expiry = new Date(year, month - 1, 1);
  return expiry.getTime() < Date.now();
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
