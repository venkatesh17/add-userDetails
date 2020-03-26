const userSchema = require('../../../Schemas/user')

module.exports = async (userData) => {
    return (async () => {
      try {
        const _id = {_id: userData._id}
        const Display = { Display : userData.Display}

      
        var data = await userSchema.findByIdAndUpdate(
             _id, Display, {new: true, upsert: true}
        )    
       
        return data
      } catch (e) {
        console.log("e............................",e);
        throw e
      }
    })()
  }