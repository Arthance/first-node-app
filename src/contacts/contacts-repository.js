const fs = require("fs/promises");
const { generateRandomId } = require("../utils/generate-random-id");

class contactsRepository {
  async findAll() {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf8"));
    return contacts;
  }

  async findOne(id) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    return contacts[id];
  }

  async createOne(contactsObj) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf8"));
    const id = generateRandomId();
    contactsObj.id = id;
    contacts[id] = contactsObj;
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }

  async updateOne(id, contactsObj) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf8"));
    contacts[id] = { id, ...contactsObj };
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }

  async deleteOne(id) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf8"));
    delete contacts[id];
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }
}

module.exports = contactsRepository;
