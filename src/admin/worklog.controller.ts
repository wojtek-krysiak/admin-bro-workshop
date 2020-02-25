import AdminBro, { CurrentAdmin } from 'admin-bro';

export class WorklogController {
  private _admin: AdminBro

  private currentAdmin: CurrentAdmin

  constructor({ admin }: {admin: AdminBro}, currentAdmin: CurrentAdmin) {
    this._admin = admin;
    this.currentAdmin = currentAdmin;
  }

  testAction(request, response): string {
    console.log('got here');
    return this._admin.options.rootPath;
  }
}

AdminBro.Router.routes.push({
  method: 'GET',
  path: '/action/{recordId}',
  Controller: WorklogController,
  action: 'testAction',
});
