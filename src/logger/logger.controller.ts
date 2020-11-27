import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  create(@Body() createLoggerDto: CreateLoggerDto) {
    return this.loggerService.create(createLoggerDto);
  }

  @Get()
  findAll() {
    return this.loggerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.loggerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateLoggerDto: UpdateLoggerDto) {
    return this.loggerService.update(+id, updateLoggerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.loggerService.remove(+id);
  }
}
