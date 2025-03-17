import express, { request } from 'express';
import { Student } from './mongodb-file/student.model.js';
let routes = express.Router();
var students = [
    { id: 1, name: 'John', age: 21 },
    { id: 2, name: 'cena', age: 22 },
    { id: 3, name: 'roman', age: 23 },
]
routes.route("")
    .get(async (req, res) => {
        let student = await Student.find()
        if (student) {

            res.json(student)
        } else {
            res.status(404).send("not found")
        }
    })
    .post(async (req, res) => {
        let savedata = new Student(req.body)
        let saved = await savedata.save()
        if (saved) {
            res.send("student added")
        } else {
            res.status(500).send("internal error")
        }

    })
routes.route("/:id")
    .get(async (req, res) => {
        let id = req.params.id
        let studentbyid = await Student.findById(id)
        if (studentbyid) {
            res.json(studentbyid)
        } else {
            res.status(404).send("not found")
        }
    })
    .put(async (req, res) => {
        let id = req.params.id
        try {
            let updatebyid = await Student.findByIdAndUpdate(id, req.body)
            if (updatebyid) {
                res.json(updatebyid)
            } else {
                res.status(404).send("not found")
            }
        } catch (err) {
            console.log(err);

        }
    }
    )
    .delete(async (req, res) => {
        let id = req.params.id
        try {

            await Student.findByIdAndDelete(id)
            res.send("student deleted")
        } catch (err) {
            console.log(err);
        }

    })
export default routes;  