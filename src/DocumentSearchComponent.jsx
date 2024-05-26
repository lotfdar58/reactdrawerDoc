import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box , Button} from "@mui/material";


const DocumentSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const data = [
    "document_1",
    "document_2",
    "document_3",
    "document_4",
    "document_5",
    "document_6",
    "document_7",
    "document_8",
    "document_9",
    "document_10"
  ];

  const selectDocument = (e, key) => {
    e.preventDefault();
    console.log(key);
  }

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };
  const dataFiltered = filterData(searchQuery, data);

  return (
    <Box sx={{ marginTop: '10px' }}>
      <form style={{ marginLeft: '10px' }}>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Enter Document"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
    </form>
    <Box sx={{ padding: 1, overflow: 'auto', maxHeight: '300px' }}>
          <Box sx={{  flexWrap: 'wrap', gap: 1 }}>
                {dataFiltered.map((d) => (
                  <Button variant="text"
                    sx={{ display: 'block' }}
                    onClick={(e) => selectDocument(e, d)}
                    key={d}
                  >
                    {d}
                  </Button>
                ))}
          </Box>
      </Box>
  </Box>
  
  );
};

export default DocumentSearchComponent;
