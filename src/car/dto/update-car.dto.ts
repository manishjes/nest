import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { CreateCarDto } from './create-car.dto';
import { User } from "../../auth/schemas/user.schema";
export class UpdateCarDto extends PartialType(CreateCarDto) {
    readonly carname: string;
     readonly description: string;
     readonly qty: Number;


     @IsEmpty({ message: ' you an not pass userid'})
     readonly user:User
}
