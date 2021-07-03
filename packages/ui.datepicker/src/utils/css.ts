export function css(object: Record<string, boolean>) {
  return Object.entries(object)
    .map((o) => (o[1] ? o[0] : null))
    .filter((o) => o !== null)
    .join(' ');
}
