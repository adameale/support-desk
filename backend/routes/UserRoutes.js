const express=require("express")
const router=express.Router()
const {registerUser,
    loginUser,
    getMe,
} =require('../controllers/UserController')

//const {protect} =require('../middleware/AuthMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)



module.exports=router