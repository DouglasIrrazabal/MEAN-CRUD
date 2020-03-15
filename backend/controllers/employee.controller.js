const employeeModel = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async (req, res) => {
    const employees = await employeeModel.find();
    res.json(employees);
};

employeeController.createEmployee = async (req, res) => {
    const employee = new employeeModel(req.body);
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
};

employeeController.getEmployee = function(){};

employeeController.editEmployee = function(){};

employeeController.deleteEmployee = function(){};

module.exports = employeeController;