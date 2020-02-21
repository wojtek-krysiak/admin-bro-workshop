import { prop, getModelForClass } from '@typegoose/typegoose';

export class Plan {
  @prop({ required: true })
  public startDate: Date

  @prop({ required: true })
  public endDate: Date

  @prop({ required: true })
  public description: string

  @prop({ required: true })
  public createdAt: Date

  @prop({ required: true })
  public updatedAt: Date

  @prop({ required: true })
  public assigneeType: string

  @prop({ required: true })
  public from: Date

  @prop({ required: true })
  public to: Date

  @prop({ required: true })
  public timePlannedSeconds: number
}

export const PlanModel = getModelForClass(Plan);
