const userSchema = require('../../../Schemas/user')

module.exports = async (userData) => {
  return (async () => {
    try {
       
      var data = await userSchema.create({
        ...userData
      })    

      return data
    } catch (e) {
      console.log("e............................",e);
      throw e
    }
  })()
}
