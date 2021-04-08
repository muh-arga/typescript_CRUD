import express from "express"
import studentController from "../controller/studentController"

export const router = express.Router()

router.get('/students', studentController.findAll)
router.get('/student/:id', studentController.findOne)
router.post('/student/create', studentController.create)
router.post('/student/update/:id', studentController.update)
router.get('/student/delete/:id', studentController.delete)
