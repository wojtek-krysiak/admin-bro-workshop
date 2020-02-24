import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import { buildRouter } from 'admin-bro-expressjs';

import { WorklogAdmin } from '../worklogs/worklog.admin';
import { PlanModel } from '../plans/worklog.entity';
import { UserModel } from '../users/user.entity';
import { ProjectModel } from '../projects/project.entity';
import { JiraProjectAdapter } from '../jira-projects/jira-project.adapter';

AdminBro.registerAdapter(AdminBroMongoose);

export default (connection) => {
  const adminBro = new AdminBro({
    resources: [
      WorklogAdmin,
      PlanModel,
      UserModel,
      ProjectModel,
      new JiraProjectAdapter({
        host: 'kmpgroup.atlassian.net',
        email: process.env.JIRA_USER,
        token: process.env.JIRA_TOKEN,
      }),
    ],
  });
  const router = buildRouter(adminBro);
  return { router, path: adminBro.options.rootPath };
};
