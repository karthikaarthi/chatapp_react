const error = (error, req, res, next) =>{
    return res.status(500).json({
        error: true,
        success: false,
        message: error.message
    })

}

export default error