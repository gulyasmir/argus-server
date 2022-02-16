import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://gulyasmir:Y17MeHEW9NvpIpCW@cluster0.yxycy.mongodb.net/argus_db?retryWrites=true&w=majority`),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}