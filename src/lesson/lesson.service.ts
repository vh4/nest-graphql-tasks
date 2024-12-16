import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lesson:Repository<Lesson>
    ){}

    async createLesson(CreateLessonInput:CreateLessonInput): Promise<Lesson>{
        const {name, startDate, endDate} = CreateLessonInput;
        const create = this.lesson.create({
            id:uuid(),
            name,
            startDate,
            endDate,
            students:[]
        });

        return await this.lesson.save(create);
    }

    async getLesson(id: string): Promise<Lesson> {
        return this.lesson.findOne({
          where: { id: id },
        });
    }

    async getAllLesson():Promise<Lesson[]>{
        return await this.lesson.find();
    }

    //assign student to lesson
    async assignStudentToLesson(lessonId:string, studentsId:string[]): Promise<Lesson>{
        const lessons = await this.lesson.findOne({where:{id:lessonId}});
        console.log([...lessons.students, ...studentsId]);
        lessons.students =  [...lessons.students, ...studentsId];
        return await this.lesson.save(lessons);
    }
      
}
