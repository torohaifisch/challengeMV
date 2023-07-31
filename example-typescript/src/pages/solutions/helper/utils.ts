export const orderingFn = (a: any, b: any) => {
  const firstName = a.name.toUpperCase();
  const secondName = b.name.toUpperCase();
  if (firstName < secondName) return -1;
  if (firstName > secondName) return 1;
  return 0;
};