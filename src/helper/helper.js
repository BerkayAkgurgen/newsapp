export const truncateString = (string = "", maxLength = 50) =>
  string && string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string;
