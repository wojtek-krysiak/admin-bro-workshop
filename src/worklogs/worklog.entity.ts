import { prop, getModelForClass } from '@typegoose/typegoose';

export class Worklog {
  @prop({ required: true })
  public tempoWorklogId: number

  @prop(({ required: true }))
  public jiraWorklogId: number

  @prop(({ required: true }))
  public issueKey: string

  @prop(({ required: true }))
  public timeSpentSeconds: number

  @prop(({ required: true }))
  public billableSeconds: number

  @prop(({ required: true }))
  public startDate: Date

  @prop(({ required: true }))
  public description: string

  @prop(({ required: true }))
  public accountId: string
}

export const WorklogModel = getModelForClass(Worklog);
