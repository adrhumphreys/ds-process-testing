const withTM = require("next-transpile-modules")(["@acme/core"]);

module.exports = withTM({
  reactStrictMode: true,
});
