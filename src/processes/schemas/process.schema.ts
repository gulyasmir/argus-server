import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProcessDocument  = Process & Document
@Schema()
export class Process {
  @Prop()
  id_device: string;

  @Prop()
  id_process: string;

  @Prop()
  number_process: number;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data_info: Object;
}

export const ProcessSchema = SchemaFactory.createForClass(Process);
