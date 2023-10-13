const stud = require('../service/stud.service');
const { calcAge } = require('../util/calcAge');

const addStud = async (req, res) => {
    try {
        const data = req.body;
        const age = await calcAge(data.dob);
        data.age = age;
        const student = await stud.insertStud(data.name, data.id, data.email, data.number, data.dob, data.gender, data.age);
        res.json({ Message: "Student Details Added.", "Details": student });
    } catch (error) {
        console.log(error);
    };
};

const fetchAllStud = async (req, res) => {
    try {
        const fetchAll = await stud.getAllStud();
        res.json({ fetchAll });
    } catch (error) {
        console.log(error);
    };
};

const getStud = async (req, res) => {
    try {
        const data = req.params;
        const fetchStud = await stud.getStud(data.email, data.id);
        res.json({ Message: "Success...", "Details": fetchStud });
    } catch (error) {
        console.log(error);
    };
};

const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const findId = await stud.findById(id);
        if (findId) {
            res.json({ Message: "Valid Student Id", data: findId });
        } else {
            res.json({ Message: "Invalid Student Id" });
        };
    } catch (error) {
        console.log(error);
    };
};

const updateStud = async (req, res) => {
    try {
        const rollNo = req.params.id;
        const data = req.body;
        const age = await calcAge(data.DOB);
        data.Age = age;
        const { id, ...excluding } = data;
        const updateStud = await stud.updateStud(rollNo, excluding);
        res.json({ Message: "Data Updated." });
    } catch (error) {
        console.log(error);
    };
};

const deleteStud = async (req, res) => {
    try {
        const rollNo = req.params.id;
        const dltStud = await stud.deleteStud(rollNo);
        res.json({ Message: "Data deleted." });
    } catch (error) {
        console.log(error);
    };
};


module.exports = {
    addStud,
    fetchAllStud,
    getStud,
    findById,
    updateStud,
    deleteStud,
};