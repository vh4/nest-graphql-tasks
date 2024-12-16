import { Module } from '@nestjs/common';
import { ResolverLesson } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Lesson])],
    providers:[ResolverLesson, LessonService]
})
export class LessonModule {
    
}
