const fs = require("fs/promises");

class contactsRepository {
  async findAll() {
    const contacts = await JSON.parse(fs.readFile("./contacts.json", "utf-8"));
    return contacts;
  }
}

module.exports = contactsRepository;
