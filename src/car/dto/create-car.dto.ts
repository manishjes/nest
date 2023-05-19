import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";

export class CreateCarDto {
    @IsString({ message: 'please enter a string'})
    readonly carname: string;
     readonly description: string;
     @IsEmpty({ message: 'You cannot pass user id' })
  
     readonly qty: Number;

    @IsEmpty({ message: ' you an not pass userid'})
     readonly user:User
}
