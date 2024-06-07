import { IsDate, IsNumber, IsString } from 'class-validator';

export class UserLogsDto{
  @IsNumber()
  userId: number;
  @IsString()
  action: string;
  @IsDate()
  time: Date
}