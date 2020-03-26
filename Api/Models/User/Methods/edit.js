const userSchema = require('../../../Schemas/user')

module.exports = async (userData) => {
    return (async () => {
      try {
        const _id = {_id: userData._id}
        const Name = { Name : userData.Name}
        const Nationality = { Nationality: userData.Nationality }
      
        var data = await userSchema.findByIdAndUpdate(
          _id, {$set:userData},{ new: true, upsert: true}
        )    
       
        return data
      } catch (e) {
        console.log("e............................",e);
        throw e
      }
    })()
  }