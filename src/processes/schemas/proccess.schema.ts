import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProccessDocument  = Proccess & Document
@Schema()
export class Proccess {
  @Prop()
  id_device: string;

  @Prop()
  id_proccess: string;

  @Prop()
  number_proccess: number;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data_info: Object;
}

export const ProccessSchema = SchemaFactory.createForClass(Proccess);
