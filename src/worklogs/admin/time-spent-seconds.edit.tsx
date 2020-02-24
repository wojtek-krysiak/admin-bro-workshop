import React from 'react';
import {
  EditPropertyProps, Label, InputGroup, Input, FormGroup,
} from 'admin-bro';

const dhmRegex = /(?<day>\d+d)?\s*(?<hour>\d+h)?\s*(?<minute>\d+m)?/;

const TimeSpentSecondsEdit: React.FC<EditPropertyProps> = (props) => {
  const { record, property, onChange } = props;
  const parseInput = (event) => {
    const { groups } = event.target.value.match(dhmRegex);
    const d = groups.day ? Number.parseInt(groups.day, 10) : 0;
    const h = groups.hour ? Number.parseInt(groups.hour, 10) : 0;
    const m = groups.minute ? Number.parseInt(groups.minute, 10) : 0;
  };
  return (
    <FormGroup>
      <Label>Time spent in hours</Label>
      <InputGroup>
        <Input onChange={parseInput} />
      </InputGroup>
    </FormGroup>
  );
};

export default TimeSpentSecondsEdit;
