import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UserDto{
  @IsString()
  name:string;
  @IsString()
  surname: string;
  @IsNumber()
  age: number;
  @IsString()
  gender: string;
  @IsBoolean()
  isProblems: boolean;
}