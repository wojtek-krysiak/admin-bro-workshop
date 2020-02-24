import React from 'react';

import { Box, Text, ShowPropertyProps } from 'admin-bro';
import { formatDistanceStrict } from 'date-fns';

const distance = (s) => formatDistanceStrict(0, s * 1000);

const TimeSpentSeconds: React.FC<ShowPropertyProps> = (props) => {
  const { record, property } = props;

  const spent = record.params[property.name];
  const billable = record.params.billableSeconds;

  return (
    <Box>
      <Text>{distance(spent)}</Text>
      <Text variant="sm">
        <Text mr="sm" as="span">Billed:</Text>
        {distance(billable)}
      </Text>
    </Box>
  );
};

export default TimeSpentSeconds;
