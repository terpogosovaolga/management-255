import { Autocomplete, TextField } from "@mui/material";

export default function DataListInput({options}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} />}
        />
    )
}