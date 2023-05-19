import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
//import { Car } from './entities/car.entity';
import { Car } from './schemas/car.schema';
import { query } from 'express';
import { Query as ExpressQuery } from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';



@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

 
  @Get()
  async findAll(@Query() query: ExpressQuery): Promise<Car[]> {
    return this.carService.findAll(query)
  }

  @Get(':id')
   findById(@Param('id') id): Promise<Car> {
    return this.carService.findById(id)
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createCarDto: CreateCarDto): Promise<Car>{
    return this.carService.create(createCarDto)
  }


  @Put(':id')
  update(@Body() updateCarDto: UpdateCarDto, @Param('id') id):Promise<Car> {
    return this.carService.update(id, updateCarDto)
  }

  @Delete(':id') 
  remove(@Param('id') id): Promise<Car> {
    return this.carService.delete(id)
  }
}  
