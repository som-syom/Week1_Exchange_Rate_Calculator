export const calcExchageRate = (a, b, c) => {
  let res = (a * b) / c;
  res = Number(res.toFixed(2)).toLocaleString('en');

  const len = res.length;
  let precision = res.indexOf('.');

  if (precision === -1) {
    res += '.00';
  } else if (len - precision !== 3) {
    while (precision + 1 < len) {
      res += '0';
      precision++;
    }
  }

  return res;
};
