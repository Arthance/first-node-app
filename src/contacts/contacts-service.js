const ContactsRepository = require("./contacts-repository");

class ContactsServices {
  constructor() {
    this.contactsRepository = new ContactsRepository();
  }

  findAll() {
    return this.contactsRepository.findAll();
  }

  async findOne(id) {
    const contacts = await this.contactsRepository.findOne(id);
    if (!contacts) throw new Error(`Cannot find contact with id ${id}`);
    return contacts;
  }

  createOne(contactsObject) {
    return this.contactsRepository.createOne(contactsObject);
  }
}

module.exports = ContactsServices;
