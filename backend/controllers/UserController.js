
const asyncHandler = require('express-async-handler')

// express.get('/', asyncHandler(async (req, res, next) => {
// 	const bar = await foo.findAll();
// 	res.send(bar)
// }))
//@desc register a new user

//@route /api/users

//@access public



const registerUser=asyncHandler(async (req,res)=>{
const {name,email,password}=req.body
    


//validation
if(!name || !email|| !password){
  res.status(400)

  throw new Error('please provide all fields')

}
res.send('register router')
})
//@desc login a  user

//@route /api/users/login

//@access public


const loginUser= asyncHandler(async (req,res)=>{
    res.send('login router')
})



module.exports ={
    registerUser,
    loginUser,
}