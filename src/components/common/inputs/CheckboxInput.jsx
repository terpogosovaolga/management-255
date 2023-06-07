import { Checkbox } from "@mui/material";
import {FormControlLabel} from "@mui/material";
import { useState } from "react"

export default function CheckBoxInput({defVal, object, fieldname, label, style, oncl}) {
    
    // можно просто закинуть label, а можно object и fieldname. тогда label станет равным object[fieldname]
    const [ch, setChecked] = useState(defVal ? true : false);
    const handleChange = (e) => {setChecked(e.target.checked); const _ = oncl ? oncl(object) : ""};
    // checked={checked} onChange={(e) => setChecked(e.target.checked)} 
    if (object && !label) {
        label = object[fieldname ? fieldname : "name"];
    } 
    return (
        <FormControlLabel checked={ch} onChange={handleChange}   control={<Checkbox/>}  label={label} sx={style?style:{}}/>
    )
}