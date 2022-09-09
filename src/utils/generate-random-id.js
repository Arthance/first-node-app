function generateRandomId() {
  return Math.floor(Math.random() * 999) + 1;
}

module.exports.generateRandomId = generateRandomId;
