const HttpException = require("../http.exception.js");

class Forbidden extends HttpException {
  constructor(message) {
    super(401, message);
  }
}

module.exports = Forbidden;