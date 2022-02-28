import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { NetworksModule } from './networks/networks.module';
import { OsInfoModule } from './os-info/os-info.module';
import { GraphicsModule } from './graphics/graphics.module';
import { AudioModule } from './audio/audio.module';
import { SystemInfoModule } from './system-info/system-info.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://gulyasmir:Y17MeHEW9NvpIpCW@cluster0.yxycy.mongodb.net/argus_db?retryWrites=true&w=majority`),
    UsersModule,
    AuthModule,
    DevicesModule,
    NetworksModule,
    OsInfoModule,
    GraphicsModule,
    AudioModule,
    SystemInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}