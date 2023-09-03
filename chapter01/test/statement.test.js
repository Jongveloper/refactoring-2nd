import statement from '../statement';
import invoices from '../json/invoices.json';
import plays from '../json/plays.json';

const result = `청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;

describe('statement', () => {
  it('should return statement', () => {
   expect(statement(invoices[0], plays)).toBe(result);
  });
});
