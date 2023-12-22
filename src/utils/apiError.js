class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    errorStack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.message = message;
    this.success = false;
    if (errorStack) {
      this.errorStack = errorStack;
    } else {
      Error.captureStackTrace(this, this.errorStack);
    }
  }
}

export default ApiError;
