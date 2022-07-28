const express  =require('express')
const {registerUser, authUser} = require('../controllers/userController')


const router=express.Router()





router.get('/',(req,res)=>{

 res.send('User')

})
router.get('/signup',(req,res)=>{

    res.send('signup')
   
   }  )
   router.post('/signup',registerUser)

   router.post('/login',authUser)
   
 
module.exports = router;