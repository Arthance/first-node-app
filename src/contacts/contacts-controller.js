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

  createOne = async (request, response) => {
    await this.contactsService.createOne(request.body);
    response.status(201).send("Contact created succesfully !");
  }
}

module.exports.ContactsController = ContactsController;
