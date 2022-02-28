import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Query } from '@nestjs-query/core'

export type AudioDocument  = Audio & Document
@Schema()
export class Audio {
  @Prop()
  id_device: string;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data_info: Object;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);