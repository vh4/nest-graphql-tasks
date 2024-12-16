import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./dto/lesson.dto";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignLessonToStudentsInput } from "./assign-student-to-lesson.input";

@Resolver(of => LessonType)
export class ResolverLesson{
    constructor(
        private lessonServices:LessonService
    ){}

    @Query(returns => LessonType)
    async lesson(
        @Args('id') id:string
    ){
        return await this.lessonServices.getLesson(id);
    }

    @Query(returns => [LessonType])
    async allLesson(){
        return await this.lessonServices.getAllLesson();
    }

    @Mutation(returns => LessonType)
    async assignLessonToStudents(
        @Args('AssignLessonToStudentsInput') AssignLessonToStudentsInput:AssignLessonToStudentsInput
    ){
        const {lessonId, studentsId} = AssignLessonToStudentsInput;
        return this.lessonServices.assignStudentToLesson(lessonId, studentsId);
    }

    @Mutation(returns => LessonType)
    async createLesson(
        @Args('CreateLessonInput') CreateLessonInput:CreateLessonInput
    ){
        return await this.lessonServices.createLesson(CreateLessonInput);
    }
}