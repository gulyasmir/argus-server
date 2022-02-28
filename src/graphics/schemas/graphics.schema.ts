import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type GraphicsDocument  = Graphics & Document
@Schema()
export class Graphics {
  @Prop()
  id_device: string;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data_info: Object;
}

export const GraphicsSchema = SchemaFactory.createForClass(Graphics);