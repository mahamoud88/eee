import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {
    return 'This actioddddn adds a new course3333';
  }

  findAll() {
    return `This actiodddn returns all course333`;
  }

  findOne(id: number) {
    return `This action dddreturns a #${id} course333`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This actidddon updadddtes a #${id} course333`;
  }

  remove(id: number) {
    return `This action removes a #${id} course333`;
  }
}
