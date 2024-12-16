import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { ResolverStudent } from './students.resolve';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  providers: [StudentsService, ResolverStudent]
})
export class StudentsModule {}
