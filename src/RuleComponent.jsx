import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'rule',
    headerName: 'Rule',
    width: 150,
    editable: true,
  }
];

const rows = [
  { id: 1, rule: 'rule1' },
  { id: 2, rule: 'rule2' },
  { id: 3, rule: 'rule3' },
  { id: 4, rule: 'rule4' },
];

export default function RuleComponent() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
