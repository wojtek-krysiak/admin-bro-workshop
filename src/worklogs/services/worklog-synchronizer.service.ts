import { WorklogModel } from '../worklog.entity';
import TempoClient from '../../utils/tempo-client';

export const worklogSynchronizerService = async (projectId: string, projectKey: string): Promise<number> => {
  const tempo = new TempoClient({ token: process.env.TEMPO_TOKEN });
  const worklogs = await tempo.projectWorklogs({
    projectKey,
    from: '2019-01-01',
    to: '2020-02-24',
  });

  let created = 0;
  // console.log(JSON.stringify(worklogs));
  await Promise.all(worklogs.map(async (worklog) => {
    if (!await WorklogModel.findOne({ tempoWorklogId: worklog.tempoWorklogId })) {
      // console.log(worklog);
      await WorklogModel.create({
        tempoWorklogId: worklog.tempoWorklogId,
        jiraWorklogId: worklog.jiraWorklogId,
        issueKey: worklog.issue.key,
        timeSpentSeconds: worklog.timeSpentSeconds,
        billableSeconds: worklog.billableSeconds,
        startDate: worklog.startDate,
        description: worklog.description,
        accountId: worklog.author.accountId,
        projectId,
      });
      created += 1;
    }
  }));
  return created;
};
