# User Registration Node.js Application Created By Favour Isioma Dumkwu

This Node.js application validates user registration data against a JSON schema using the Ajv library.

## Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.

## Usage

1. Update the `userData` object in `app.js` with the user registration data you want to validate.
2. Customize the JSON schema in `schema.json` to fit your validation requirements if necessary.
3. Run `node app.js` in your terminal to validate the user registration data against the schema.

## Schema

The JSON schema for user registration can be found in `schema.json`. It defines the structure and validation rules for user registration data.

## Dependencies

- [Ajv](https://www.npmjs.com/package/ajv): A JSON Schema Validator for JavaScript.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
