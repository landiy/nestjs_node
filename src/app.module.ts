import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import ormCfg from './../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormCfg)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
