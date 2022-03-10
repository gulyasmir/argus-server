import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NetworksDocument  = Networks & Document
@Schema()
export class Networks {
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

export const NetworksSchema = SchemaFactory.createForClass(Networks);
