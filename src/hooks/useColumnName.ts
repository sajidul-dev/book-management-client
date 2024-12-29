/* eslint-disable @typescript-eslint/no-explicit-any */
export const useColumnName = (obj: any) => {
  if (!obj) return [];
  const columns = Object.keys(obj).map((key) => ({
    key,
    label: key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }));

  return columns;
};
