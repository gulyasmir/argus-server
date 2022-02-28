import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SystemInfoDocument  = SystemInfo & Document
@Schema()
export class SystemInfo {
  @Prop()
  id_device: string;

  @Prop()
  page: string;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data_info: Object;
}

export const SystemInfoSchema = SchemaFactory.createForClass(SystemInfo);
