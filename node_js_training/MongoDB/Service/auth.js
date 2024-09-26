const sessionIdToStudentMap = new Map();

const setStudent = (id, user) => {
    sessionIdToStudentMap.set(id, user);
}

const getStudent = (id) => {
    return sessionIdToStudentMap.get(id);
}

module.exports={
    setStudent, getStudent
}