const Ajv = require("ajv");
const ajv = new Ajv();
const schema = {
    type: "object",
  properties: {
    U_Email: {
      type: "string",
      pattern: "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4})+$",
    },
    U_Password: {
      type: "string",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$",
      minLength: 6,
      maxLength: 200,
    },

  },
  required: [ "U_Email", "U_Password"],
  additionalProperties: false,
}
module.exports = ajv.compile(schema);
