import { prop, getModelForClass } from '@typegoose/typegoose';

export class Project {
  @prop({ required: true })
  public name: string

  @prop({ required: true })
  public jiraKey: string
}

export const ProjectModel = getModelForClass(Project);
