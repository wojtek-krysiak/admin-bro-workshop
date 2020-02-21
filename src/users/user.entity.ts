import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {
  @prop({ required: true })
  public name: string

  @prop({ required: true })
  public jiraAccountId: string
}

export const UserModel = getModelForClass(User);
