import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

var checkUserAuth = async (req, res, next) => {
  let token
  const { authorization } = req.headers
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1]
      //console.log("Authorization :",authorization)

      // Verify Token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY)
      //console.log(userId)
        
      // Get User from Token
      req.user = await UserModel.findById(userId).select('-password')
      //console.log(req.user)

      next()
    } catch (error) {
      console.log(error)
      res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
    }
  }
  if (!token) {
    res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
  }
}

export default checkUserAuth