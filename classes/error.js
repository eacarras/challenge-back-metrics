class Error {
  constructor(data) {
    const {
      track='',
      message='',
      statusCode=500,
    } = data;

    this.track = track;
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = Error;
