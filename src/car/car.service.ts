import { query } from 'express';
import { CarModule } from './car.module';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './schemas/car.schema';


import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core'


@Injectable() 
export class CarService {
  constructor (@InjectModel('Car') private readonly carModel:Model<Car>){}

  async findAll(query: Query): Promise<Car[]>{

  const resPerPage = 2
  const currentPage = Number(query.pages) || 1
  const skip = resPerPage * (currentPage -1)
    const keyword = query.keyword ? {

       carname: {
        $regex: query.keyword,
        $options: 'i'
       }
    } : {}
    const car =  await this.carModel.find({...keyword}).limit(resPerPage).skip(skip)
    return car
  }
  async findById(id: string): Promise<Car>{

    const res = await this.carModel.findById({ _id: id})
    if(!res){
      throw new NotFoundException('car not found  ')
    }
    return res;
  }
   
  async create(car: Car): Promise<Car> {
    const newCar = new this.carModel(car);
    return await newCar.save(); 
  }

    async delete(id: string): Promise<Car>{
      return await this.carModel.findByIdAndRemove(id)
    }

    async update(id: string, car: Car): Promise<Car>{
      return await this.carModel.findByIdAndUpdate(id, car, {new: true})
    }
      
    } 

    
  

