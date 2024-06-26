import React, { useState , useEffect, FC} from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Table, TableBody, 
         TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { columnsModel } from './config.tsx';

const DatatValidationComponent: FC = () => {
  const [data, setData] = useState<any>(null);
  const [editableData, setEditableData] = useState<string | null>(null);
  const [inputsDisabled, setInputsDisabled] = useState<boolean>(false);

  useEffect(() => {
    // Update the document title using the browser API
    loadCombinedData();
  }, []);

  const combinedData = {
    schedule: [
      { id: 1, name: 'Alice', age: 30, location: 'New York', email: 'alice@example.com' },
      { id: 2, name: 'Bob', age: 25, location: 'San Francisco', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', age: 35, location: 'Los Angeles', email: 'charlie@example.com' },
      { id: 4, name: 'David', age: 40, location: 'Chicago', email: 'david@example.com' },
      { id: 5, name: 'Eve', age: 28, location: 'Boston', email: 'eve@example.com' }
    ],
    call: [
      { id: 6, name: 'Frank', age: 32, location: 'Seattle', email: 'frank@example.com' },
      { id: 7, name: 'Grace', age: 27, location: 'Austin', email: 'grace@example.com' },
      { id: 8, name: 'Henry', age: 45, location: 'Denver', email: 'henry@example.com' }
    ],
    series: {
      serie: 'serie1',
    }
  };

  const loadCombinedData = () => {
    setData(combinedData);
    setEditableData(JSON.stringify(combinedData.series, null, 2));
  };

    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>, key: string, index: number | null, isArray: boolean) => {
    if (!inputsDisabled) {
      const newData = { ...data };
      if (isArray) {
        newData[key][index as number][event.target.name] = event.target.value;
      } else {
        newData[key][event.target.name] = event.target.value;
      }
      setData(newData);
    }
  };

  const handleSave = () => {
    try {
      const newData = JSON.parse(editableData as string);
      setData({ ...data, series: newData });
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  const toggleInputs = () => {
    setInputsDisabled(!inputsDisabled);
  };
  
  const validate = (key: string) => {
    console.log(key);
  };

  const addNewAttribute = () => {

  }
  

  return (
    <Box>
      {/* <CssBaseline /> */}
        
        {data == null ? (
          <Typography>no data</Typography>
        ) : (
          <Box>
            <Button variant="outlined" onClick={addNewAttribute} sx={{ marginRight: 2 }}>
                         Add Attribute
            </Button>

            {Object.keys(data).map((key, idx) => (
              <Accordion key={idx} sx={{ marginTop: '10px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${key}-content`} id={`${key}-header`}>
                <CloseIcon sx={{ color: red[500] }}/> <CheckIcon sx={{ color: green[500] }}/> 
                <Typography variant="subtitle1">{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>
                </AccordionSummary>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Button variant="outlined" onClick={toggleInputs} sx={{ marginRight: 2 }}>
                        {inputsDisabled ? 'Enable Inputs' : 'Disable Inputs'}
                    </Button>
                    <Button variant="outlined" sx={{ marginRight: 2 }}>
                        Edit
                    </Button>
                    <Button variant="outlined"  onClick={() => validate(key)} sx={{ marginRight: 2 }}>
                        Validate
                    </Button>
                </Box>
                <AccordionDetails>
                  {columnsModel[key].type === 'array' ? (
                    TableContent(key)
                  ) : (
                    SingleValueContent(key)
                  )}
                </AccordionDetails>
                {key === 'series' && (
                  <AccordionDetails>
                    <Button variant="contained" color="primary" onClick={handleSave} disabled={inputsDisabled}>
                      Save
                    </Button>
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </Box>
        )}
      </Box>
  );

  function SingleValueContent(key) {
    return <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {Object.entries(data[key]).map(([itemKey, value], index) => (
              <TableRow key={index}>
                <TableCell>{itemKey}</TableCell>
                <TableCell>
                  <input
                    type="text"
                    name={itemKey}
                    value={value as string}
                    onChange={(event) => handleEditChange(event, key, null, false)}
                    style={{
                      width: '100%', height: '40px', padding: '1', borderStyle: 'inherit',
                      backgroundColor: inputsDisabled ? '#f2f2f2' : 'transparent'
                    }}
                    disabled={inputsDisabled} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>;
  }

  function TableContent(key) {
    return <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[key][0]).map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data[key].map((item, index) => (
            <TableRow key={index}>
              {Object.entries(item).map(([itemKey, value]) => (
                <TableCell key={itemKey} sx={{ padding: '10px' }}>
                  <input
                    type="text"
                    name={itemKey}
                    value={value as string}
                    // size={15}
                    onChange={(event) => handleEditChange(event, key, index, true)}
                    // style={{ width: '100%', padding: '0', border: 'none', outline: 'none', backgroundColor: inputsDisabled ? '#f2f2f2' : 'transparent' }}
                    style={{
                      width: '100%', height: '40px', padding: '1', borderStyle: 'inherit',
                      backgroundColor: inputsDisabled ? '#f2f2f2' : 'transparent'
                    }}
                    disabled={inputsDisabled} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>;
  }
};

export default DatatValidationComponent;
