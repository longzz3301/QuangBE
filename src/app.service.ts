/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './model/customer';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { RandomHelper } from './random';
import { EmailService } from './mail.service';

@Injectable()
export class AppService {
  constructor(
    private readonly emailService: EmailService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  public async sendOtpToEmail(
    email: string,
    fullName: string
  ): Promise<string> {
    const otp = RandomHelper.generateOTP()
    const mailRestaurant ="service@the-coco.de"
    const subject = `CôCô # ${otp}`
    const contentCustomer = `
      <p>Dear ${fullName || 'Customer'}.</p>
      <p>Thank you for being associated with our company.</p>
      <p>Your OTP: ${otp}</p>
      <p>This OTP is valid for 2 minutes.</p>
      <p>We recommend you do not share this with anyone to prevent fraudulent transactions.</p>
      <p>We are always available at your service.</p>
      <p>Please feel free to contact us for any question.</p>
      <p>Sincerely,</p>
      <p>Oxii Team.</p>
    `

    this.emailService.send(email, subject, null, contentCustomer)

    this.emailService.send(mailRestaurant, subject, null, contentCustomer)

    return otp
  }

   async createCustomerInfo(customerData: CreateCustomerDto): Promise<any> {
    const customer = Customer.create({
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      email: customerData.email,
      phone: customerData.phone,
      // productQuantity: customerData.productQuantity,
      // address: customerData.address,
      // appointmentDate: customerData.appointmentDate,
    });
    console.log('customerData.firstName :' ,customerData.firstName)
    await this.sendOtpToEmail(customerData.firstName, customerData.lastName,)
    console.log("customerData :" ,customerData)
    // await Customer.save(customer);  
    return {
      message: 'Customer info saved successfully!',
      data: customer,
    };
}
}
