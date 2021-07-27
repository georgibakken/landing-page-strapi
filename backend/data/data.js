const { global, pages } = require("./en");
const { globalDA, pagesDA } = require("./da");
const { leadFormSubmissions } = require("./lead-form-submissions.json");

module.exports = {
  globals: [global, globalDA],
  pages: [...pages, ...pagesDA],
  leadFormSubmissions,
};
