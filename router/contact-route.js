const express = require('express');
const { getContactMessages, deleteContactMessage, addContactMessage } = require('../controllers/contactController');
const contactRouter = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require('../enums/roles');

contactRouter.get('/contactMessages', authMiddleware([Roles.ADMIN]), getContactMessages);
contactRouter.delete('/contactMessages/:id', authMiddleware([Roles.ADMIN]), deleteContactMessage);
contactRouter.post('/', addContactMessage);

module.exports = contactRouter;
