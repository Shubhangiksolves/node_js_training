const jwt = require('jsonwebtoken');
const secretKey = 'Shubhi%$123$efs';

const setStudentJwt = (student) => {
    return jwt.sign({
        id: student._id,
        email: student.email,
        role: student.role,
    }, secretKey);
}

const getStudentJwt = (token) => { 
   if(!token) return null;
   try{
    return jwt.verify(token, secretKey);
   }
   catch(error){
    return null;
   }
}

module.exports={
    setStudentJwt, getStudentJwt
}