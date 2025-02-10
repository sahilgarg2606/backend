class errorHandler extends Error{
    constructor(
        statusCode,
        message = "someThing Went wrong",
        error= [],
        statck = ""

    ){
       super(message)
       this.statusCode = statusCode;
       this.message  = message;
       this.success = false;
       this.data = null;
       this.error = this.errors

       if(statck)
       {
        this.stack  = statck
       }else{
          Error.captureStackTrace(this, this.constructor)
       }
    }
}

export {errorHandler};