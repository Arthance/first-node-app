const { Router } = require("express");
const { validateBody } = require("./middlewares/validate-body");
const { ContactsController } = require("./contacts-controller");

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.post("/", validateBody, contactsController.createOne);
contactsRouter.put("/:id", validateBody, contactsController.updateOne);
contactsRouter.delete("/:id", contactsController.deleteOne);

module.exports = contactsRouter;
