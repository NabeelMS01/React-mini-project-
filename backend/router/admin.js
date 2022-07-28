const express  =require('express')
const { getAllUser, blockUser, unBlockUser, editUser } = require('../controllers/userController')


const router=express.Router()
 

router.get('/',(req,res)=>{

 res.send('Admin ')

})
router.get('/usersData',getAllUser )

router.patch('/blockUser',blockUser)
router.patch('/unBlockUser',unBlockUser)
router.post('/edituser',editUser)
module.exports = router;