import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Repository } from 'typeorm';
import { createStudentInput } from './students.input';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student) private student:Repository<Student>
    ){}
    async createStudent(createStudentInput:createStudentInput):Promise<Student>{
        const {firstName, lastName} = createStudentInput;
        const create = this.student.create({
            id:uuid(),
            firstName,
            lastName
        });

        return await this.student.save(create);
    }

    async getAllStudents():Promise<Student[]>{
        return await this.student.find();
    }

    async findByStudent(id:string):Promise<Student>{
        return await this.student.findOne({where:{id}});
    }
}
