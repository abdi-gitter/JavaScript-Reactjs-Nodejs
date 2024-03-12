const sum = require('./sum');
// I want this to pass:
test('adds 1 + 2 to be 3', () => {
    // assertion
    // expectation
    // Matcher
  expect(sum(1, 2)).toBe(3);
});
// I want this to fail:
test('adds 2 + 2 to be 4', ()=>{
    expect(sum(2,2)).toBe(4)
})
// An assertion is a function that throws an error if a value is not what you expect.
// an assertion is made up of three parts: a value, a matcher, and an expected value.