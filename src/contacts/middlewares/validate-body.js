function validateBody(request, response, next) {
  const body = request.body;
  const validator = { errors: {}, isValid: true };
  if (!body.lastname) {
    validator.errors.lastname = "lastname cannot be blank";
  }
  if (!body.firstname) {
    validator.errors.firstname = "firstname cannot be blank";
  }
  if (!body.phonenumber) {
    validator.errors.phonenumber = "phonenumber cannot be blank";
  }
  if (!body.emailadress) {
    validator.errors.emailadress = "emailadress cannot be blank";
  }
  if (!body.position) {
    validator.errors.position = "position cannot be blank";
  }
  if (!body.company) {
    validator.errors.company = "company cannot be blank";
  }
  if (!body.companyadress) {
    validator.errors.companyadress = "companyadress cannot be blank";
  }
  if (
    validator.errors.lastname ||
    validator.errors.firstname ||
    validator.errors.phonenumber ||
    validator.errors.emailadress ||
    validator.errors.position ||
    validator.errors.company ||
    validator.errors.companyadress
  ) {
    validator.isValid = false;
  }

  if (!validator.isValid) {
    return response.status(422).send(validator);
  }

  next();
}

module.exports.validateBody = validateBody;
