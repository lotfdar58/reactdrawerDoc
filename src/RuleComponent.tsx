import * as React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


interface RuleRow {
  id: number;
  rule: string;
}

const RuleComponent: React.FC = () => {

  const columns = [
    {
      field: 'edit',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Button
          variant="text"
          color="primary"
          onClick={() => handleEditClick(params.id)}
        >
          Edit
        </Button>
      )
    },
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'rule',
      headerName: 'Rule',
      width: 150,
      editable: true,
    }
  ];
  
  const rows: RuleRow[] = [
    { id: 1, rule: 'rule1' },
    { id: 2, rule: 'rule2' },
    { id: 3, rule: 'rule3' },
    { id: 4, rule: 'rule4' },
  ];

  const handleEditClick = (id: number) => {
    // Handle the edit button click
    console.log(`Edit button clicked for row id: ${id}`);
  };


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
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default RuleComponent;
