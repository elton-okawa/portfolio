const shortFormatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export function toShortDate(date: Date) {
  return shortFormatter.format(date);
}
