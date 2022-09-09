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
      console.log("Error : ", err.message);
      response.status(404).send(err.message);
    }
  };

  createOne = async (request, response) => {
    await this.contactsService.createOne(request.body);
    response.status(201).send("Contact created successfully !");
  };

  updateOne = async (request, response) => {
    try {
      const id = request.params.id;
      await this.contactsService.updateOne(id, request.body);
      response.send("Contact updated successfully !");
    } catch (err) {
      console.log("Error : ", err.message);
      response.status(404).send(err.message);
    }
  };

  deleteOne = async (request, response) => {
    try {
      const id = request.params.id;
      await this.contactsService.deleteOne(id);
      response.send("Contact deleted successfully !");
    } catch (err) {
      console.log("Error : ", err.message);
      response.status(404).send(err.message);
    }
  };
}

module.exports.ContactsController = ContactsController;
