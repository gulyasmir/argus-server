import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from "../../enums/role.enum";

export type UserDocument  = User & Document
@Schema()
export class User {
  @Prop()
  userId:number;

  @Prop()
  role: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);