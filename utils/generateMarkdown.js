// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPL: '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    MPL: '![License: MIT](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    Unlicensed: ''
  };

  return licenseBadges[license] || '';
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    MPL: 'https://www.mozilla.org/en-US/MPL/2.0/',
    Unlicensed: ''
  };
  
  return licenseLinks[license] || '';
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    MIT: 'This project is licensed under the MIT License.',
    GPL: 'This project is licensed under the GPL License.',
    Apache: 'This project is licensed under the Apache License.',
    MPL: 'This project is licensed under the MPL License.',
    Unlicensed: ''
  };
  
  return licenseTexts[license] || '';
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#Contributing)

  * [Tests](#tests)

  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License
  
  For more information, please visit: [License Link](${renderLicenseLink(data.license)})
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  For questions or inquiries, please contact me directly at ${data.email}. You can see more of my work at ${data.username} (https://github.com/calzu0821).

`;
}

module.exports = generateMarkdown;
