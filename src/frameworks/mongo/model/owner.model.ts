import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
  @Prop({ required: true, unique: true })
  name: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
