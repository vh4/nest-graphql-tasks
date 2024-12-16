import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentType } from "src/students/dto/students.dto";

@ObjectType('LessonType')
export class LessonType{
    @Field(type => ID)
    id:string

    @Field()
    name:string

    @Field()
    startDate:string

    @Field()
    endDate:string

    @Field(type => [StudentType])
    students: string[]
}