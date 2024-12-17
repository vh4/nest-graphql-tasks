import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { Lesson } from './lesson.entity';
import { LessonType } from './dto/lesson.dto';
import { StudentsService } from 'src/students/students.service';
import { AssignStudentsToLessonInput } from './assign-student-to-lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentsService,
  ) {}

  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string,
  ) {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput, 
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}