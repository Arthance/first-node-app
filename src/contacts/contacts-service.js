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

  async updateOne(id, contactsObject) {
    const contacts = await this.contactsRepository.findOne(id);
    if (!contacts) throw new Error(`Cannot find contact with id ${id}`);
    return this.contactsRepository.updateOne(id, contactsObject);
  }

  async deleteOne(id) {
    const contacts = await this.contactsRepository.findOne(id);
    if (!contacts) throw new Error(`Cannot find contact with id ${id}`);
    return this.contactsRepository.deleteOne(id);
  }
}

module.exports = ContactsServices;
