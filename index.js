const Ajv = require('ajv');

const schema = require('./src/schema');
const inputs = require('./src/inputs');

const ajv = Ajv({ allErrors: true });
const validate = ajv.compile(schema);

function validator(input) {
    inputs.forEach((input, index) => {
        const result = validate(input) ? 'Valid!' : `Invalid:${ajv.errorsText(validate.errors)}`;

        console.log(`[${index}] Result: `, JSON.stringify(result, 4));
    })
}

validator();
