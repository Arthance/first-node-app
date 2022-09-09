const ContactsRepository = require("./contacts-repository");

class ContactsServices {
  constructor() {
    this.contactsRepository = new ContactsRepository();
  }

  findAll() {
    return this.contactsRepository.findAll();
  }

  createOne(contactsObject) {
    return this.contactsRepository.createOne(contactsObject);
  }
}

module.exports = ContactsServices;
