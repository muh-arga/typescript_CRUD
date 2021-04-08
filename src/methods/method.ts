import {student, students} from "../model/mahasiswa"

export const find = async (id: number): Promise<student> => {
    const studentIndex: number = students.findIndex(get => get.id == id)
    return students[studentIndex]
}

export const create = async (studentUpdate: student) => {
    let newStudent:student = studentUpdate
    return students.push(newStudent)
}

export const update = async (id: number, studentUpdate: student): Promise<student> => {
    let updateStudent:student = await find(id)
    updateStudent.nrp = studentUpdate.nrp
    updateStudent.nama = studentUpdate.nama
    updateStudent.kelas = studentUpdate.kelas
    updateStudent.alamat = studentUpdate.alamat
    updateStudent.noHp = studentUpdate.noHp

    return updateStudent
}

export const remove = async (id: number) => {
    const delStudent = students.findIndex(del => del.id == id)
    students.splice(delStudent, 1)
}
