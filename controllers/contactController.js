const ContactMessage = require('../models/contact');

const getContactMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find({});
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteContactMessage = async (req, res) => {
    try {
        await ContactMessage.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Contact message deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

const addContactMessage = async (req, res) => {
    try {
        const message = new ContactMessage(req.body);
        await message.save();
        res.status(201).send(message);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { getContactMessages, deleteContactMessage, addContactMessage };
