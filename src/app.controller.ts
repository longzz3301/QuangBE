/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-customer')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post()
  // createCustomerInfo(): any {
  //   return 
  // }

  @Post('create-customer') // Định nghĩa API route
  createCustomerInfo(@Body() customerData: CreateCustomerDto): any {
    return this.appService.createCustomerInfo(customerData); // Gọi service để xử lý
  }
}
