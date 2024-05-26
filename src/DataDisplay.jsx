import React, { useState , useEffect} from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Table, TableBody, 
         TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DataDisplay = () => {
  const [data, setData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [inputsDisabled, setInputsDisabled] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    loadCombinedData();
  });

  // Sample combined JSON data
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

  const handleEditChange = (event, key, index, isArray) => {
    if (!inputsDisabled) {
      const newData = { ...data };
      if (isArray) {
        newData[key][index][event.target.name] = event.target.value;
      } else {
        newData[key][event.target.name] = event.target.value;
      }
      setData(newData);
    }
  };

  const handleSave = () => {
    try {
      const newData = JSON.parse(editableData);
      setData({ ...data, series: newData });
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  const toggleInputs = () => {
    setInputsDisabled(!inputsDisabled);
  };
  
  const validate = (key) => {
    console.log(key);
  };
  

  return (
    <Box>
      {/* <CssBaseline /> */}
        
        {data === null ? (
          <Typography>Click the button to load data</Typography>
        ) : (
          <Box>

            {Object.keys(data).map((key, idx) => (
              <Accordion key={idx} sx={{ marginTop: '10px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${key}-content`} id={`${key}-header`}>
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
                  {Array.isArray(data[key]) ? (
                    <TableContainer component={Paper}>
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
                                <TableCell key={itemKey}>
                                  <input
                                    type="text"
                                    name={itemKey}
                                    value={value}
                                    onChange={(event) => handleEditChange(event, key, index, true)}
                                    style={{ width: '100%', padding: '0', border: 'none', outline: 'none', backgroundColor: inputsDisabled ? '#f2f2f2' : 'transparent' }}
                                    disabled={inputsDisabled}
                                  />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <Box>
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
                                      value={value}
                                      onChange={(event) => handleEditChange(event, key, null, false)}
                                      style={{ width: '100%', padding: '0', border: 'none', outline: 'none', backgroundColor: inputsDisabled ? '#f2f2f2' : 'transparent' }}
                                      disabled={inputsDisabled}
                                    />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                    </Box>
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
};

export default DataDisplay;
