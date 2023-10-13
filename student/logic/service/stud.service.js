const stud = require('../model/stud.model.js');

const findById = async (id) => {
    const findId = await stud.findOne({ Id: id });
    return findId;
};

const findByEmail = async (email) => {
    const findEmail = await stud.findOne({ Email: email });
    return findEmail;
};

const insertStud = async (name, id, email, number, dob, gender, age) => {
    const addStud = await stud.create({ Name: name, Id: id, Email: email, Number: number, DOB: dob, Age: age, Gender: gender });
    return addStud;
};

const getAllStud = async () => {
    const getAll = await stud.find();
    return getAll;
};

const getStud = async (id, ps) => {
    const getStud = await stud.findOne({ Email: id, Id: ps });
    return getStud;
};

const updateStud = async (id, data) => {

    const update = await stud.findOneAndUpdate({ Id: id }, data);
    return update;
};

const deleteStud = async (id) => {
    const deleteStud = await stud.findOneAndDelete({ Id: id });
    return deleteStud;
};

module.exports = {
    findById,
    findByEmail,
    insertStud,
    getAllStud,
    getStud,
    updateStud,
    deleteStud,
};