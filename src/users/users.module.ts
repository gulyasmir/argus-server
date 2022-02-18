import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "../enums/roles.guard";

@Module({
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
],
  exports: [UsersService],
  controllers:[UsersController],
  imports:[
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema}
    ])
  ]
})
export class UsersModule {}
