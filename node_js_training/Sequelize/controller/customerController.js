const {sequelize} = require('../config/db');
const customer = require('../models/customer');

// create new customer

const createCustomer = async (req, res) => {
    try {
        const {username, email} = req.body;
        const newCustomer = await customer.create({username: username, email: email});
        res.status(200).json(newCustomer);    
    }
    catch(error) {
        console.log('Error creating user', error);
    }
}

// get all customer

const getAllCustomer = async (req, res) => {
    try{
        const customers = await customer.findAll();
        res.status(200).json(customers);
    }
    catch(error){
        console.log("Error getting customers", error);        
    }
}

// get customer by id

const getCustomerByID = async (req, res) => {
    const id = req.params.id;
    try{
        const customerById = await customer.findByPk(id);
        customerById ? res.status(200).json(customerById) : res.status(404).json({error: 'customer not found'});
    }
    catch(error){
        console.log("Error getting user", error);
    }
}

// update customer by id

const updateCustomerByID = async (req, res) => {
    const id = req.params.id;
    try{
        const customerById = await customer.findByPk(id);
        if(!customerById){
            res.status(404).json({error: 'customer not found'})
        }
        else{
            const {username, email} = req.body;
            customerById.username = username;
            customerById.email = email;
            await customerById.save();
            res.status(200).json(customerById)
        }
    }
    catch(error){
        console.log("Error getting user", error);
    }
}

// delete customer by id

const deleteCustomerByID = async (req, res) => {
    const id = req.params.id;
    try{
        const customerById = await customer.findByPk(id);
        if(!customerById){
            res.status(404).json({error: 'customer not found'})
        }
        else{
            customerById.destroy();
            res.status(200).send('Customer deleted');
        }
    }
    catch(error){
        console.log("Error getting user", error);
    }
}

module.exports = {
    getAllCustomer,
    createCustomer,
    getCustomerByID,
    updateCustomerByID,
    deleteCustomerByID
}