const { response } = require("express");
const ContactsServices = require("./contacts-service");

class ContactsController{
  constructor(){
    this.contactsService = new ContactsServices;
  }
  findAll = async (_, response) => {
    const contacts = await this.contactsService.findAll();
    return response.send(contacts);
  }
}

module.exports.ContactsController = ContactsController;
