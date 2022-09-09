const ContactsRepository = require("./contacts-repository");

class ContactsServices {
  constructor() {
    this.contactsRepository = new ContactsRepository();
  }

  findAll() {
    return this.contactsRepository.findAll();
  }
}

module.exports = ContactsServices;
