import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument  = Device & Document
@Schema()
export class Device {

  @Prop({ type: Object })
  device: Object;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
