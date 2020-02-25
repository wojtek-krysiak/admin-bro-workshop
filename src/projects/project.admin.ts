import AdminBro, { ResourceOptions } from 'admin-bro';
import { ProjectModel } from './project.entity';
import { worklogSynchronizerService } from '../worklogs/services/worklog-synchronizer.service';

// eslint-disable-next-line import/prefer-default-export
export const ProjectAdmin = {
  resource: ProjectModel,
  options: {
    properties: {
      issues: {
        components: {
          show: AdminBro.bundle('./admin/show-issues.component.tsx'),
        },
      },
    },
    actions: {
      synchronizeWorklogs: {
        name: 'synchronizeWorklogs',
        actionType: 'record',
        handler: async (request, response, context) => {
          const { record, translateMessage } = context;

          const created = await worklogSynchronizerService(record?.id() as string, record?.param('jiraKey'));

          return {
            record: record?.toJSON(context.currentAdmin),
            notice: {
              message: translateMessage('synchronizedFinish', { count: created }),
            },
          };
        },
        icon: 'ChangeCatalog',
        component: false,
      },
    },
  } as ResourceOptions,
};
