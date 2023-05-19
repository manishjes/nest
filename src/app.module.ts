import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { CarModule } from './car/car.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({envFilePath : '.env', isGlobal: true}),
    MongooseModule.forRoot(process.env.PORT_URI),
    UserModule,
    
    CarModule
    
  ], 
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
