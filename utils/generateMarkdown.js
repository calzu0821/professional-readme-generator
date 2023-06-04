// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    MIT: 'MIT License text goes here...',
    GPL: 'GPL License text goes here...',
    Apache: 'Apache License text goes here...',
    MPL: 'MPL License text goes here...',
    Unlicensed: ''
  };
  
  return licenseTexts[license] || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.projectDescription}
  
  ## License
  
  ${renderLicenseBadge(data.projectLicense)}
  
  For more information, please visit: [License Link](${renderLicenseLink(data.projectLicense)})
  
  ${renderLicenseSection(data.projectLicense)}
  
  ## Usage
  
  ...
  
  ## Installation
  
  ...
  
  ## Contributing
  
  ...
  
  ## Tests
  
  ...
  
  ## Questions
  
  For questions or inquiries, please contact ${data.username} via email: ${data.email}.

`;
}

module.exports = generateMarkdown;
