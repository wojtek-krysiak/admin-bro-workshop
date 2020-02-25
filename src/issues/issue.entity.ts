import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Project } from '../projects/project.entity';

export class Issue {
  @prop({ required: true })
  public description: string

  @prop(({ required: true, ref: 'Project' }))
  public projectId: Ref<Project>
}

export const IssueModel = getModelForClass(Issue);
