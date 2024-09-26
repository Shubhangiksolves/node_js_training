const fs = require('fs');

const logReqRes = (filename) => {
   return (req, res, next) => {
    fs.appendFile(
        filename,
        `\ndate: ${new Date()} method: ${req.method} path: ${
          req.path
        }`,
        (err, data) => {
          next();
        }
      );
   }
}

module.exports = {logReqRes}