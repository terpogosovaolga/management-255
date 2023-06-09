import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function MultipleSelect({options, fieldName, active}) {

    // options - массив объектов (именно объектов)
    // fieldName - название поля, которое будем выводить. Например, человек представлен в виде объекта со свойствами id, age, fullname. если fieldName = fullname, то пользователь будет видеть только его имя

    const [value, setValue] = useState(active ? active : []);
    console.log(value);
    return (
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={(option) => option[fieldName]}
            value={value}
            onChange={(_, newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="outlined"
            />
            )}
        />
    )
}