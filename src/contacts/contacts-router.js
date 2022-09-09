const { Router } = require("express");
const { ContactsController } = require("./contacts-controller");

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.post("/", contactsController.createOne);
// contactsRouter.put("/:id");
// contactsRouter.delete("/:id");

module.exports = contactsRouter;
