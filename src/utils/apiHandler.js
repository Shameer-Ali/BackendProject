class ApiResponse {
    constructor(statusCode, message="Hello world", data){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode<400;
    }
} 