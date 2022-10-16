import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function SearchBar() {
    return (
        <TextField
            fullwidth="true"
            label="Enter Keywords"
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <Search />
                    </IconButton>
                ),
            }}
            sx={{ marginTop: "20px" }}
        />
    );
}
