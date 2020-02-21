/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import {
  BaseResource, BaseProperty, BaseRecord, Filter,
} from 'admin-bro';
import axios, { AxiosInstance } from 'axios';

// ID of IN PROGRESS project catogory
const IN_PROGRESS = 10000;

export class JiraProjectAdapter extends BaseResource {
  private version = 3;

  private jira: AxiosInstance

  private rawProperties: Record<string, BaseProperty>

  constructor(options) {
    super(options);
    const { host, email, token } = options;
    this.jira = axios.create({
      baseURL: `https://${host}/rest/api/${this.version}`,
      auth: {
        username: email,
        password: token,
      },
    });

    this.rawProperties = {
      avatar: new BaseProperty({
        path: 'avatar',
        type: 'string',
        isId: false,
        isSortable: false,
        position: 0,
      }),
      name: new BaseProperty({
        path: 'name',
        type: 'string',
        isId: false,
        isSortable: true,
        position: 2,
      }),
      key: new BaseProperty({
        path: 'key',
        type: 'string',
        isId: true,
        isSortable: true,
        position: 1,
      }),
    };
  }

  id() {
    return 'jira-projects';
  }

  databaseName(): string {
    return 'jira';
  }

  async count(filter): Promise<number> {
    const query = filter.filters.name;
    const response = await this.jira.get('project/search', {
      params: { categoryId: IN_PROGRESS, maxResults: 1, query },
    });
    return response.data.total;
  }

  async find(filter: Filter, options) {
    const orderBy = options.sort.sortBy
      ? `${options.sort.direction === 'asc' ? '' : '-'}${options.sort.sortBy}`
      : undefined;

    // eslint-disable-next-line dot-notation
    const query = filter.filters['name'] && filter.filters['name'].value;
    const response = await this.jira.get('project/search', {
      params: {
        categoryId: IN_PROGRESS,
        maxResults: options.limit,
        startAt: options.offset,
        orderBy,
        query,
      },
    });

    return response.data.values.map(this.toBaseRecord.bind(this));
  }

  async findMany() {
    return [];
  }

  async findOne(id) {
    const project = await this.jira.get(`project/${id}`);
    return this.toBaseRecord(project.data);
  }

  properties() {
    return Object.values(this.rawProperties);
  }

  property(path) {
    return this.rawProperties[path];
  }

  private toBaseRecord(project) {
    return new BaseRecord({
      name: project.name,
      key: project.key,
      avatar: project.avatarUrls['24x24'],
    }, this);
  }
}
