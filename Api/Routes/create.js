const userCreate = require(appPath + '/Models/User')

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message:undefined,
        data:''
    }

    let UserCreate = new userCreate()
    
    await UserCreate.create(req.body).then(()=>{
        response.success = true
        response.data = req.body
        res.status(200).json(response)
    })
    .catch((e)=>{
        response.message = e
        res.status(403).json(response)
    })
      
}