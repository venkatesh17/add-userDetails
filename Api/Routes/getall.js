const getAllUsers = require(appPath + '/Models/User')


module.exports = async (req, res) =>{
    let response = Object.assign({}, BasicResponse);
    let GetAllUsers = new getAllUsers()
   
    try {
        var result = await GetAllUsers.getall()
        response.success = true
        response.data = result
        res.status(200).json(response) 
    
    } catch (e) {
        response.message = e
        res.status(403).json(response)
        console.log(e);
    
    }
}
