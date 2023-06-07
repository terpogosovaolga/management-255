import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function DataListInput({options, fieldName, active, handleFunc, width, height}) {

    let obj = {}; obj[fieldName ? fieldName : "name"] = "";
    const [value, setValue] = useState(active ? active : obj);
    let sx = {};
    if (width)  sx.width=width;
    if (height)  sx.height=height;
    console.log(sx);

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option[fieldName ? fieldName : "name"]}
            sx={sx}
            value={value ? value : obj}
            onChange={
                handleFunc ? 
                    (e, newValue) => { handleFunc(newValue); setValue(newValue) } 
                            : 
                    (e,newValue) => setValue(newValue)
            }
            renderInput={(params) => <TextField {...params} />}
        />
    )
}