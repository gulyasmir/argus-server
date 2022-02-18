import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument  = Device & Document
@Schema()
export class Device {
  @Prop()
  title: string;

  @Prop()
  parameters: string[];
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
