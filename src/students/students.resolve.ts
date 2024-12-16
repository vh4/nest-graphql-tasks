import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentType } from "./dto/students.dto";
import { StudentsService } from "./students.service";
import { createStudentInput } from "./students.input";

@Resolver(of => StudentType)
export class ResolverStudent{
    constructor(
        private readonly students:StudentsService
    ){}

    @Query(returns => [StudentType])
    async student(){
        return await this.students.getAllStudents();
    }

    @Query(returns => StudentType)
    async studentById(
        @Args('id') id:string
    ){
        return await this.students.findByStudent(id);
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput:createStudentInput
    ){
        return await this.students.createStudent(createStudentInput);
    }
    
}