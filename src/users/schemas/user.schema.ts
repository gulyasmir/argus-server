import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument  = User & Document
@Schema()
export class User {
  @Prop()
  role: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  login: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
