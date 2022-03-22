import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UuidDocument  = Uuid & Document
@Schema()
export class Uuid {
  @Prop()
  uuid: string;

  @Prop()
  device_id: string;
}

export const UuidSchema = SchemaFactory.createForClass(Uuid);
