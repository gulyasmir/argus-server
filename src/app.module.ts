import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { NetworksModule } from './networks/networks.module';
import { SystemInfoModule } from './system-info/system-info.module';
import { ProcessesModule } from './processes/processes.module';
import { UuidService } from './uuid/uuid.service';
import { UuidModule } from './uuid/uuid.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://gulyasmir:Y17MeHEW9NvpIpCW@cluster0.yxycy.mongodb.net/argus_db?retryWrites=true&w=majority`),
    UsersModule,
    AuthModule,
    DevicesModule,
    NetworksModule,
    SystemInfoModule,
    ProcessesModule,
    UuidModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}