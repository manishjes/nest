import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import {ConfigModule} from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schemas/car.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [
    AuthModule,
    ConfigModule.forRoot({envFilePath : '.env', isGlobal: true}),
    MongooseModule.forRoot(process.env.PORT_URI),
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema}])
  ]
})
export class CarModule {}
  