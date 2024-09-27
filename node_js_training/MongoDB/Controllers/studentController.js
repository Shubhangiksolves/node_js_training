const studentModel = require('../Models/student');
const {v4: uuidv4} = require('uuid');
const {setStudent} = require('../Service/auth');
const { setStudentJwt } = require('../Service/jwtAuth');

const handleSignup = async(req, res) => {
    const {name, email, password, role} = req.body;
    await studentModel.create({name: name, email: email, password: password, role: role});
    return res.render('/');
} 

const handlelogin = async(req, res) => {
    const { email, password} = req.body;
    const student = await studentModel.findOne({email, password});
    if(!student){
        return res.render('login',{
            error: 'Invalid Student or Password'
        });
    }
   else {
    //statefull

    // const sessionId = uuidv4();
    // setStudent(sessionId, student);
    // res.cookie('session_id', sessionId);

    //stateless
    
    const token = setStudentJwt(student);
    res.cookie('token', token);
    return res.redirect('/');
}
} 

module.exports = {handleSignup, handlelogin};