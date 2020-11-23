import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course3333';
  }

  findAll() {
    return `This action returns all course333`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course333`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course333`;
  }

  remove(id: number) {
    return `This action removes a #${id} course333`;
  }
}
