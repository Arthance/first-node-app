const { Router } = require("express");
const { ContactsController } = require("./contacts-controller");

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.post("/", contactsController.createOne);
contactsRouter.put("/:id", contactsController.updateOne);
contactsRouter.delete("/:id", contactsController.deleteOne);

module.exports = contactsRouter;
