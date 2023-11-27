
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


it('should handle low interest rates', function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 0.1
  }
  expect(calculateMonthlyPayment(values)).toEqual('83.75')
})

it('should not handle an interest rate of 0', function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toBe('NaN')
})

it('should not handle a term of 0 years', function() {
  const values = {
    amount: 10000,
    years: 0,
    rate: 10
  }
  expect(calculateMonthlyPayment(values)).toBe('Infinity')
})
/// etc
