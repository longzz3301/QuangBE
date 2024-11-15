/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './model/customer';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

   async createCustomerInfo(customerData: CreateCustomerDto): Promise<any> {
    const customer = Customer.create({
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      email: customerData.email,
      phone: customerData.phone,
      productQuantity: customerData.productQuantity,
      address: customerData.address,
      appointmentDate: customerData.appointmentDate,
    });
    await Customer.save(customer);  
    return {
      message: 'Customer info saved successfully!',
      data: customer,
    };
}
}
