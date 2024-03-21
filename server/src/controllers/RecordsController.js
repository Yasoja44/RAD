const Records = require('../models/Records');

const addRecords = async (req, res) => {
    if (req.body) {

        const record = new Records(req.body);

        await record.save()
            .then(data => {
                console.log(data);
                res.status(200).send({ data: data });
            })
            .catch(error => {

                res.status(500).send({ error: error.message });
            });
    }
}

const getAllRecords = async (req, res) => {
    try {
        const records = await Record.find().populate('record_user', 'record_field1 record_field2');
        res.status(200).send({ data: records });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const getSpecificRecord = async (req, res) => {
    if (req.params && req.params.id) {
        await Records.findById(req.params.id)
            //.populate('workout_users', 'username email')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const editRecords = async (req, res) => {
    if (req.params && req.params.id) {

        const updated = req.body;

        await Records.findByIdAndUpdate(req.params.id, updated)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const deleteRecords = async (req, res) => {
    if (req.params && req.params.id) {

        await Records.findByIdAndDelete(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    addRecords,
    getAllRecords,
    getSpecificRecord,
    editRecords,
    deleteRecords,
};