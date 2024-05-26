interface Column {
  field: string;
  headerName: string;
  width: number;
  type: 'text' | 'number' | 'date' | 'select';
  editable?: boolean;
  description?: string;
}

interface Model {
  type: 'array' | 'single';
  columns?: Column[];
  field?: string;
}


// TODO: Since we may need add remove fields this part should be kept inside database
export const columnsModel: {[key: string]: Model} = {
    schedule: { 
        type: 'array',
        columns: [
            { field: 'id', headerName: 'ID', width: 90, type: 'text' },
            {
              field: 'name',
              headerName: 'First name',
              width: 150,
              editable: true,
              type: 'text'
            },
            {
              field: 'age',
              headerName: 'Age',
              width: 50,
              editable: true,
              type: 'number'
            },
            {
              field: 'location',
              headerName: 'Location',
              type: 'text',
              width: 110,
              editable: true,
            },
            {
              field: 'emai.',
              headerName: 'Email',
              type: 'text',
              description: '',
              width: 160,
            },
          ]
    },
    call: {type: 'array', columns: [
        { field: 'id', headerName: 'ID', width: 90, type: 'text' },
        {
          field: 'name',
          headerName: 'First name',
          width: 150,
          editable: true,
          type: 'text'
        },
        {
          field: 'age',
          headerName: 'Age',
          width: 50,
          editable: true,
          type: 'number'
        },
        {
          field: 'location',
          headerName: 'Location',
          type: 'text',
          width: 110,
          editable: true,
        },
        {
          field: 'emai.',
          headerName: 'Email',
          type: 'text',
          description: '',
          width: 160,
        },
      ]
    },
    series: { type: 'single', field:'serie1'}
};