import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Owner } from './owner.model';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true })
  owner: Owner;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
