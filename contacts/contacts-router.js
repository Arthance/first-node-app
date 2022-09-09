const { Router } = require("express");

const contactsRouter = Router();

contactsRouter.get("/");
contactsRouter.get("/:id");
contactsRouter.post("/");
contactsRouter.put("/:id");
contactsRouter.delete("/:id");

module.exports = contactsRouter;
