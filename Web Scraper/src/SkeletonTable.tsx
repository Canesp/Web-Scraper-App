import React from 'react';
import { Table } from '@mantine/core';

const SkeletonTable = () => {
  return (
    <Table>
      {/* Add table headers */}
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>

      {/* Add table body */}
      <tbody>
        {/* Add table rows */}
        <tr>
          <td>Loading...</td>
          <td>Loading...</td>
          <td>Loading...</td>
          {/* Add more cells as needed */}
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default SkeletonTable;
