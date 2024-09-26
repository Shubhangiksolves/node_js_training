const studentModel = require('../Models/student');
const {v4: uuidv4} = require('uuid');
const {setStudent} = require('../Service/auth')

const handleSignup = async(req, res) => {
    const {name, email, password} = req.body;
    await studentModel.create({name: name, email: email, password: password});
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
    const sessionId = uuidv4();
    setStudent(sessionId, student);
    res.cookie('session_id', sessionId);
    return res.redirect('/');}
} 

module.exports = {handleSignup, handlelogin};