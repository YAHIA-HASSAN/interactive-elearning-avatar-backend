const validator = require("../utils/authValidator");

module.exports = (req, res, next) => {
  let valid = validator(req.body);
  if (valid) {
    req.valid = 1;
    next();
  } else {
    res.status(200).send({"status":"Wrong Email or Password"});
  }
};
