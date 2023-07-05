import React from 'react';
import { Skeleton, Table, Space } from '@mantine/core';

const SkeletonTable = () => {
  return (
    <Table striped highlightOnHover withColumnBorders withBorder>
      {/* Add table headers */}
      <thead>
        <tr>
          <th><Skeleton height={8} radius="xl" /></th>
          <th><Skeleton height={8} radius="xl" /></th>
          <th><Skeleton height={8} radius="xl" /></th>
          {/* Add more columns as needed */}
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><Space h="4vh" /></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </Table>
  );
};

export default SkeletonTable;
