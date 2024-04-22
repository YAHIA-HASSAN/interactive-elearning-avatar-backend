const Ajv = require("ajv");
const ajv = new Ajv();
const schema = {
    type: "object",
  properties: {
    U_FirstName: {
      type: "string",
      minLength: 1,
      maxLength: 50,
      pattern: "^[A-Z][a-z]*$",
    },
    U_MiddleName: {
      type: "string",
      minLength: 1,
      maxLength: 50,
      pattern: "^[A-Z][a-z]*$",
    },
    U_LastName: {
      type: "string",
      minLength: 1,
      maxLength: 50,
      pattern: "^[A-Z][a-z]*$",
    },
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
    U_Type: {
      type: "string",
      enum: ["A", "V", "R", "K"],
    },
    U_Age: {
      type: "number",
      minimum: 6,
      maximum: 100,
    },
  },
  required: ["U_FirstName", "U_MiddleName", "U_LastName", "U_Email", "U_Password", "U_Type", "U_Age"],
  additionalProperties: false,
}
module.exports = ajv.compile(schema);
