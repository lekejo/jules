const express = require('express');
const router = express.Router();
const refillsController = require('../controllers/refillsController');

router.get('/', refillsController.getAllRefills);
router.get('/new', refillsController.getNewRefillForm);
router.post('/', refillsController.createRefill);
router.get('/:id/edit', refillsController.getEditRefillForm);
router.post('/:id', refillsController.updateRefill); // Could also be PUT
router.post('/:id/delete', refillsController.deleteRefill); // Could also be DELETE

module.exports = router;
