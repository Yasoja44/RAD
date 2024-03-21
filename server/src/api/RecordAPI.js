const express = require('express');
const router = express.Router();
const controller = require('../controllers/RecordsController');

module.exports = function () {
    router.get('/', controller.getAllRecords);
    router.get('/:id', controller.getSpecificRecord);
    router.post('/', controller.addRecords);
    router.put('/:id', controller.editRecords);
    router.delete('/:id', controller.deleteRecords);
    return router;
}