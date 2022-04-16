import { calcExchageRate } from './Calc';

it('calc correctly', () => {
  expect(calcExchageRate(100, 10, 10)).toBe('100.00');
});
