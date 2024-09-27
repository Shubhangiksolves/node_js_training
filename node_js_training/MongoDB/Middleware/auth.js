const { getStudent } = require("../Service/auth");
const { getStudentJwt } = require("../Service/jwtAuth");

const checkAuth = (roles = []) => {
    return (req, res, next) => {
        if(!req.student) return res.redirect('/login');
        if(!roles.includes(req.student.role)) return res.end('Unauthorized');
        return next();
    }
}

const restricTOLoggedinStudentOnly = async(req, res, next) => {
    // const uuid = req.cookies?.session_id;
    const uuid = req.cookies?.token;
    // const student = getStudent(uuid);
    const student = getStudentJwt(uuid);
    if(!uuid || !student) return res.redirect('/login');
    else{
        req.student = student;
        next();
    }
}

module.exports = {restricTOLoggedinStudentOnly, checkAuth};