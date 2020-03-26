const express = require('express')
const router = express.Router()

const create = require('./create')
const allusers = require('./getall')
const edituser = require('./edit')
const deleteuser = require('./delete')

router.get('/allusers', allusers)
router.post('/create', create)
router.put('/edituser', edituser)
router.put('/deleteuser', deleteuser)


module.exports = router
