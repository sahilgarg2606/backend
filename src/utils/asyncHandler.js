const asyncHandler = (errorHandler) => async(req , res, next)=>{
    
    Promise.resolve( errorHandler(req , res , next)).catch((err)=>{
       res.send("Error :",err)
    })
}

export {asyncHandler}

    //   const asyncHandler = (fn) => async(req ,res, next) =>{
    //     try {
    //         await fn(req , res, next);
    //     } catch (error) {
    //         res.status(error.code || 500).json({
    //             success: false,
    //             message: error.message
    //         })
    //     }
    // }
    





