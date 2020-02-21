import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import { buildRouter } from 'admin-bro-expressjs';

import { WorklogModel } from '../worklogs/worklog.entity';
import { PlanModel } from '../plans/worklog.entity';
import { UserModel } from '../users/user.entity';
import { ProjectModel } from '../projects/project.entity';

AdminBro.registerAdapter(AdminBroMongoose);

export default (connection) => {
  const adminBro = new AdminBro({
    resources: [WorklogModel, PlanModel, UserModel, ProjectModel],
  });
  const router = buildRouter(adminBro);
  return { router, path: adminBro.options.rootPath };
};
