import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignLessonToStudentsInput{
    @IsUUID()
    @Field(type => ID)
    lessonId:string

    @IsUUID()
    @Field(type => [ID])
    studentsId:string[]
}