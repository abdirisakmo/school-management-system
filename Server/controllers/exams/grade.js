const Grade = require('../../models/exams/grade');
const promise = require('../../middleware/promise');

//get all the grades
exports.getAllGrades = promise(async (req, res) => {
    const grades = await Grade.find();
    const totalGrades = await Grade.countDocuments();
    res.json({ grades, totalGrades });
});

//add grade
exports.addGrade = promise(async (req, res) => {
    const grades = new Grade({ ...req.body });
    const saveGrade = await grades.save();
    res.json({ saveGrade });
});

//update grade 
exports.updateGrade = promise(async (req, res) => {
    const grades = await Grade.updateOne({ _id: req.params.gradeId }, { $set: { ...req.body } });
    res.json({ grades });
});

//delete grade 
exports.deleteGrade = promise(async (req, res) => {
    const grades = await Grade.deleteOne({ _id: req.params.deleteId });
    res.json({ grades });
})