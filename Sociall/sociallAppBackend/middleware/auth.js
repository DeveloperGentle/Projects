import jwt from 'jsonwebtoken'

const auth = async (req,res,next) => {
try {




let decodedData

if( req.headers.authorization.includes('Bearer')) {
 const token = req.headers.authorization.split(" ")[1]
 console.log(token)
decodedData = jwt.verify(token, 'test')
req.userId = decodedData?.id
}

else {
 decodedData = req.headers.authorization
 req.userId = decodedData
}

next()

} catch(error) {
console.log(error)
}
}

export default auth