import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import { buildRouter } from 'admin-bro-expressjs';

import { WorklogAdmin } from '../worklogs/worklog.admin';
import { ProjectAdmin } from '../projects/project.admin';
import { PlanModel } from '../plans/worklog.entity';
import { UserModel } from '../users/user.entity';
import { IssueModel } from '../issues/issue.entity';
import { JiraProjectAdapter } from '../jira-projects/jira-project.adapter';
import { locale } from './locale';

import './worklog.controller';

AdminBro.registerAdapter(AdminBroMongoose);

export default (connection) => {
  const adminBro = new AdminBro({
    resources: [
      WorklogAdmin,
      PlanModel,
      UserModel,
      IssueModel,
      ProjectAdmin,
      new JiraProjectAdapter({
        host: 'kmpgroup.atlassian.net',
        email: process.env.JIRA_USER,
        token: process.env.JIRA_TOKEN,
      }),
    ],
    locale,
  });
  adminBro.watch();
  const router = buildRouter(adminBro);
  return { router, path: adminBro.options.rootPath };
};
