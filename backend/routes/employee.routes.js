const express = require('express');
const router = express.Router();

const employeeCtlr =  require('../controllers/employee.controller');

router.get('/', employeeCtlr.getEmployees);
router.post('/', employeeCtlr.createEmployee);
router.get('/:id', employeeCtlr.getEmployee);
router.put('/:id', employeeCtlr.editEmployee);
router.delete('/:id', employeeCtlr.deleteEmployee);

module.exports = router;