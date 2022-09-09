const express = require("express");
const cors = require("cors");
const contactsRouter = require("./contacts/contacts-router");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} !`);
});
