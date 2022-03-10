import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument  = Device & Document
@Schema()
export class Device {
  @Prop()
  ip: string;

  @Prop()
  time: number;

  @Prop()
  location: string;

  @Prop()
  function: string;

  @Prop()
  title: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
