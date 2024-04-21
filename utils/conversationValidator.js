const Ajv = require("ajv");
const ajv = new Ajv();
const schema = {
  "type": "object",
  "properties": {
    "C_Time": {
      "type": "string",
      //pattern matches the YYYY-MM-DDTHH:MM:SS.sssZ DateTime format
      pattern: '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]{3})?Z$',
    },
    "C_Title": {
      "type": "string",
    },
    "U_ID": {
      "type": "object",
    },
    "F_ID": {
      "type": ["object", "null"],
    }
  },
  "required": ["C_Time", "C_Title", "U_ID", "F_ID"],
  "additionalProperties": false,
};

module.exports = ajv.compile(schema);
