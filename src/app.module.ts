import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentsModule } from './students/students.module';
import { Student } from './students/students.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb+srv://fathoniwasesojati:anakmami123@cluster0.kko8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      useUnifiedTopology:true,
      synchronize:true,
      entities:[Lesson, Student]
    }),
    LessonModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
