const { response } = require("express");
const ContactsServices = require("./contacts-service");

class ContactsController {
  constructor() {
    this.contactsService = new ContactsServices();
  }

  findAll = async (_, response) => {
    const contacts = await this.contactsService.findAll();
    return response.send(contacts);
  };

  findOne = async (request, response) => {
    try {
      const id = request.params.id;
      const contacts = await this.contactsService.findOne(id);
      response.send(contacts);
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  createOne = async (request, response) => {
    await this.contactsService.createOne(request.body);
    response.status(201).send("Contact created succesfully !");
  };
}

module.exports.ContactsController = ContactsController;
