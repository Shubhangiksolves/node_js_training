const userModel = require('../Models/user');

const getAllUsers = async(req, res) => {
    const users = await userModel.find({});
    res.status(201).json(users);
};

const createUser = async(req, res) => {
    const body = req.body;
    if(!body || !body.firstname || !body.lastname || !body.email || !body.gender){
        return res.status(400).json({message: 'All fields are required'});
    }
    else {
        const result =  await userModel.create({firstname: body.firstname, lastname: body.lastname, email: body.email, gender: body.gender})
        console.log("Result", result);
        return res.status(201).json({message: "User created successfully"});
    }
};

const updateUser = async(req,res) => {
    await userModel.findByIdAndUpdate(req.params.id, {firstname: "Shubhi", lastname: "Sharma"});
    res.status(200).json({msg: "Updated"}); 
}

const getUserById = async(req, res) => {
    const user = await userModel.findById(req.params.id);
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json(user);
}

const deleteUser = async(req,res) => {
    const user = await userModel.findById(req.params.id);
    await userModel.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({error: 'User not found'});
    res.status(200).json({msg: "Deleted"}); 
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}