const errorHandler = (error, emptyResult = null) => {
    const { response } = error
    if(!response){
        return "Cannot connect to server, check your internet connection"
        
    }
    return response.data.message
}

export default errorHandler