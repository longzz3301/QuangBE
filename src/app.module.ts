/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './model/customer';
import { EmailService } from './mail.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'my-db-coco.c14688k4utx7.ap-southeast-2.rds.amazonaws.com',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'long332001',
    //   database: 'postgres',
    //   schema: 'public',
    //   entities: [Customer],
    //   synchronize: true,
    //   ssl: {
    //     rejectUnauthorized: false, 
    //   },
    
    // }),
    
  ],
  controllers: [AppController],
  providers: [AppService,EmailService],
})
export class AppModule {}
