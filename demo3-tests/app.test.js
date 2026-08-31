const { getWelcomeMessage, add } = require('./app');

describe('Demo 3 - Real Unit Tests', () => {

  test('should return default welcome message', () => {
    expect(getWelcomeMessage()).toBe("CI/CD Demo Works!");
  });

  test('should return personalized welcome', () => {
    expect(getWelcomeMessage("Azure")).toBe("Hello Azure - CI/CD Demo Works!");
  });

  test('add function should add numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 15)).toBe(25);
  });

  test('add function should handle zero', () => {
    expect(add(0, 0)).toBe(0);
  });

});
