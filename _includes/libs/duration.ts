export const calcDuration = (from: Date, to: Date = new Date()): number =>
  Math.floor((to.valueOf() - from.valueOf()) / (24 * 60 * 60 * 1000));
