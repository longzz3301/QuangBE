/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsNumber()
  productQuantity: number;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsDateString()
  appointmentDate: string;
}
