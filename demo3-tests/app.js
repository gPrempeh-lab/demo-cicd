function getWelcomeMessage(name) {
  if (!name) return "CI/CD Demo Works!";
  return `Hello ${name} - CI/CD Demo Works!`; }

function add(a, b) {
  return a + b;
}

module.exports = { getWelcomeMessage, add };