const Ajv = require("ajv");
const ajv = new Ajv();
const schema = {
  type: "object",
  properties: {
    M_ID: {
      type: ["string","null"],
    },
    M_Time: {
      type: "string",
      //pattern matches the YYYY-MM-DDTHH:MM:SS.sssZ DateTime format
      pattern: '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]{3})Z?$',
    },
    M_UserMessage: {
      type: "boolean",
    },
    M_Text: {
      type: "string",
      minLength: 1,
    },
    C_ID: {
      type: "object",
    },
    M_Action: {
      type: "string",
    }
  },
  // required: ["M_Time", "M_UserMessage", "M_Text", "C_ID"],
  additionalProperties: false,
};

module.exports = ajv.compile(schema);