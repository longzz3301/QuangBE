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
    first_name:string ,
    last_name:string ,
    email:string ,
    phone:string ,
    pickupQuantity:string ,
    branch:string ,


    wählenSieDieAdresseDesAbholung: string ,
    gewünschterLieferterminAbholung: string ,
    gewünschteLieferzeitAbholung: string ,

    titel: string ,
    vornameLieferung: string ,
    nachnameLieferung: string ,
    startBeLieferung:string ,
    hausnrLieferung:string ,
    adresszusatzLieferung:string ,
    gewünschterLieferterminLieferung:string ,
    gewünschteLieferzeitLieferung:string ,
    plzLieferung:string ,
    ortLieferung:string ,


  ): Promise<string> {
    const otp = RandomHelper.generateOTP()
    const mailRestaurant ="duylonggz@gmail.com"
    const subject = `CôCô # ${otp}`
    const gesamt = Number(pickupQuantity) * 148; 
    const mwst = Number((gesamt * 0.07).toFixed(2));
    const netto = Number((gesamt - mwst).toFixed(2));
    const lieferOptionen  = branch
    let contentCustomer = `
    <p>Hi ${first_name || 'Customer'}.</p>

    <table border="1" cellpadding="5" cellspacing="0">
    <thead>
      <tr>
        <th>Product</th>
        <th>Menge</th>
        <th>Gesamt</th>
        <th>mwst</th>
        <th>Netto</th>
        <th>Gesamt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ganspaket</td>
        <td>${pickupQuantity}</td>
        <td>${gesamt}</td>
        <td>${mwst}</td>
        <td>${netto}</td>
        <td>${gesamt}</td>
      </tr>
    </tbody>
  </table>

  <p>MwSt.7.00% : ${mwst}.</p>
  <p>Netto: ${netto}.</p>
  <p>Gesamt : ${gesamt}.</p>
  `;


  let contentForCoCo = `
  <p>first_name: ${first_name || 'Customer'}.</p>
  <p>last_name: ${last_name} </p>
  <p>your email: ${email}</p>
  <p>phone: ${phone}</p>
  <p>pickupQuantity: ${pickupQuantity}</p>
  <p>Lieferoptionen : ${lieferOptionen}</p>`;


  if (lieferOptionen === 'Abholung') {
    contentForCoCo += `
      <p>wählenSieDieAdresseDesAbholung: ${wählenSieDieAdresseDesAbholung}</p>
      <p>gewünschterLieferterminAbholung: ${gewünschterLieferterminAbholung}</p>
      <p>gewünschteLieferzeitAbholung: ${gewünschteLieferzeitAbholung}</p>
    `;
  } else if (lieferOptionen === 'Lieferung') {
    contentForCoCo += `
      <p>titel: ${titel}.</p>
      <p>vornameLieferung: ${vornameLieferung} </p>
      <p>nachnameLieferung: ${nachnameLieferung}</p>
      <p>startBeLieferung: ${startBeLieferung}</p>
      <p>hausnrLieferung: ${hausnrLieferung}</p>
      <p>adresszusatzLieferung: ${adresszusatzLieferung}</p>
      <p>gewünschterLieferterminLieferung: ${gewünschterLieferterminLieferung}</p>
      <p>gewünschteLieferzeitLieferung: ${gewünschteLieferzeitLieferung}</p>
      <p>plzLieferung: ${plzLieferung}</p>
      <p>ortLieferung: ${ortLieferung}</p>
    `;
  }

    this.emailService.send(email, subject, null, contentForCoCo)

    this.emailService.send(mailRestaurant, subject, null, contentCustomer)

    return otp
  }

   async createCustomerInfo(customerData: CreateCustomerDto): Promise<any> {
    // const customer = Customer.create({
    //   firstName: customerData.firstName,
    //   lastName: customerData.lastName,
    //   email: customerData.email,
    //   phone: customerData.phone,

    //   // productQuantity: customerData.productQuantity,
    //   // address: customerData.address,
    //   // appointmentDate: customerData.appointmentDate,
    // });
    console.log('customerData.firstName :' ,customerData.firstName)
    console.log("customerData :" ,customerData)
    return await this.sendOtpToEmail(
      customerData.firstName, 
      customerData.lastName,
      customerData.email,
      customerData.phone,
      customerData.pickupQuantity 
      ,customerData.branch, 
      
      customerData.wählenSieDieAdresseDesAbholung,
      customerData.gewünschterLieferterminAbholung,
      customerData.gewünschteLieferzeitAbholung,


      customerData.titel,
      customerData.vornameLieferung,
      customerData.nachnameLieferung,
      customerData.startBeLieferung,
      customerData.hausnrLieferung,
      customerData.adresszusatzLieferung,
      customerData.gewünschterLieferterminLieferung,
      customerData.gewünschteLieferzeitLieferung,
      customerData.plzLieferung,
      customerData.ortLieferung



      
    )
    // await Customer.save(customer);  
    
}
}
