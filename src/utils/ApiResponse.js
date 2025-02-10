class ApiResponse{
    constructor(
        statusCode,
        message = "something wrong",
        data
    ){
        this.statusCode = statusCode,
        this.data = data;
        this.success= true;
        this.data = data;
    }
}