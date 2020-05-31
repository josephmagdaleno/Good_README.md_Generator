function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
${data.installation}
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
${data.tests}
## Questions
If you have any questions about the repo, contact ${data.username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
