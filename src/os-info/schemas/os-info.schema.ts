import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OsInfoDocument  = OsInfo & Document
@Schema()
export class OsInfo {
  @Prop()
  id_device: string;

  @Prop()
  time:number;

  @Prop({ type: Object })
  data: Object;
}

export const OsInfoSchema = SchemaFactory.createForClass(OsInfo);
