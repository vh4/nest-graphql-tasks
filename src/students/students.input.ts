import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";

@InputType()
export class createStudentInput{
    @MinLength(4)
    @Field()
    firstName:string
    
    @MinLength(4)
    @Field()
    lastName:string
}