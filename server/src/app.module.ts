import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { DeviceModule } from './device/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BindModule } from './bind/bind.module';
import { MqttModule } from 'nest-mqtt';


@Module({
  imports: [DeviceModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'sqlite.db',
    autoLoadEntities: true,
    synchronize: true,
  }), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',  'public'),
  }), BindModule, 
    MqttModule.forRoot({
      host: 'localhost',
      port: 1883,
      queue: true,
    })
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
