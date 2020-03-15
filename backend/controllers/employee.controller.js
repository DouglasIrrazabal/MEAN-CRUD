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

employeeController.getEmployee = async (req, res) => {
    const employee = await employeeModel.findById(req.params.id);
    res.json(employee);
};

employeeController.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await employeeModel.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({
        'status': 'Employee updated'
    });
};

employeeController.deleteEmployee = async (req, res) => {
    await employeeModel.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Employee deleted'
    });
};

module.exports = employeeController;