import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ShowPropertyProps, useRecord, useRecords, RecordJSON, Box, Button, BasePropertyComponent, ReduxState, H5, Icon,
} from 'admin-bro';

type NewIssueProps = {
  record: RecordJSON;
}

const ShowIssuesComponent: React.FC<ShowPropertyProps> = (props) => {
  const { record } = props;

  const defaultIssue = {
    params: { projectId: record.id },
  } as unknown as RecordJSON;

  const {
    record: issue, handleChange, submit, loading,
  } = useRecord(defaultIssue, 'Issue');

  const { records: issues, fetchData } = useRecords('Issue');

  const IssueResource = useSelector(((state: ReduxState) => state.resources.find((r) => r.id === 'Issue')));
  const descriptionProperty = IssueResource.editProperties.find((p) => p.name === 'description');

  const createNewIssue = () => {
    submit().then((response) => {
      if (response.data.record.id) {
        fetchData();
        handleChange(defaultIssue);
      }
    });
  };

  return (
    <Box mt="xl">
      <H5>Issues in project</H5>
      {issues.map((storedIssue) => (
        <Box
          pb="default"
          mb="default"
        >
          {storedIssue.params.description}
        </Box>
      ))}
      <BasePropertyComponent
        where="edit"
        resource={IssueResource}
        property={descriptionProperty}
        record={issue}
        onChange={handleChange}
      />
      <Button onClick={createNewIssue}>
        {loading ? (<Icon icon="Fade" spin />) : null}
        Add Issue
      </Button>
    </Box>
  );
};

export default ShowIssuesComponent;
