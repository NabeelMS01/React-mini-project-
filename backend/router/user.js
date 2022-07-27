const express  =require('express')
const {registerUser, authUser} = require('../controllers/userController')


const router=express.Router()





router.get('/',(req,res)=>{

 res.send('User')

})
router.get('/createuser',(req,res)=>{

    res.send('User')
   
   }  )
   router.post('/createuser',registerUser)
   router.post('/login',authUser)
   
 
module.exports = router;