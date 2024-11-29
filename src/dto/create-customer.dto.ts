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
  pickupQuantity: number;

  @IsOptional()
  @IsString()
  branch: string;

  @IsOptional()
  @IsString()
  wählenSieDieAdresseDesAbholung: string;

  @IsOptional()
  @IsString()
  gewünschterLieferterminAbholung: string;


  @IsOptional()
  @IsString()
  gewünschteLieferzeitAbholung: string;

  @IsOptional()
  @IsString()
  titel: string;


  @IsOptional()
  @IsString()
  vornameLieferung: string;


  @IsOptional()
  @IsString()
  nachnameLieferung: string;

  @IsOptional()
  @IsString()
  startBeLieferung: string;


  @IsOptional()
  @IsString()
  hausnrLieferung: string;


  @IsOptional()
  @IsString()
  adresszusatzLieferung: string;


  @IsOptional()
  @IsString()
  gewünschterLieferterminLieferung: string;


  @IsOptional()
  @IsString()
  gewünschteLieferzeitLieferung: string;

  @IsOptional()
  @IsString()
  plzLieferung: string;


  @IsOptional()
  @IsString()
  ortLieferung: string;

}
