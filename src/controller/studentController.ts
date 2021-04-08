import {Request, Response} from "express"
import {students, student} from "../model/mahasiswa"
import * as method from "../methods/method"

export = {
    findAll: async(req: Request, res: Response) => {
        try{
            res.status(200).send(students)
        } catch (e) {
            res.status(500).send(e.message)
        }
    },
    findOne: async(req: Request, res:Response) => {
        const id: number = parseInt(req.params.id, 10)
        
        try{
            const student: student = await method.find(id)
            res.status(200).send(student)
        } catch (e) {
            if(e) res.status(500).send(e.message)
        }
    },
    update: async(req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10)

        try{
            method.update(id, req.body)
            res.status(200).send(students)
        } catch (e) {
            if(e) res.status(500).send(e.message)
        }
    },
    create: async(req: Request, res: Response) => {
        try{
            method.create(req.body)
            res.status(200).send(students)
        }catch (e) {
            if(e) res.status(500).send(e.message)
        }
    },
    delete: async(req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10)

        try{
            method.remove(id)
            res.status(200).send(students)
        } catch (e) {
            if(e) res.status(500).send(e.message)
        }
    }
}