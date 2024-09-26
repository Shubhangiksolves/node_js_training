const { getStudent } = require("../Service/auth");

const restricTOLoggedinStudentOnly = async(req, res, next) => {
    const uuid = req.cookies?.session_id;
    const student = getStudent(uuid)
    if(!uuid || !student) return res.redirect('/login');
    else{
        req.student = student;
        next();
    }
}

module.exports = {restricTOLoggedinStudentOnly};