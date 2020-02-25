import AdminBro, {
  ResourceOptions, Action, RecordActionResponse, RecordJSON,
} from 'admin-bro';
import { WorklogModel } from './worklog.entity';

// eslint-disable-next-line import/prefer-default-export
export const WorklogAdmin = {
  resource: WorklogModel,
  options: {
    listProperties: ['issueKey', 'description', 'timeSpentSeconds', 'projectId', 'accountId'],
    properties: {
      description: {
        isTitle: true,
      },
      timeSpentSeconds: {
        components: {
          list: AdminBro.bundle('./admin/time-spent-seconds.list.tsx'),
          edit: AdminBro.bundle('./admin/time-spent-seconds.edit.tsx'),
        },
      },
    },
  } as ResourceOptions,
};
