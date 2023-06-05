import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function TagsInput({rows}) {
    const [value, setValue] = useState(""); // рубрики одной строкой
    const [readyValue, setReadyValue] = useState([]); // массив рубрик
    useEffect(() => {
        setReadyValue(value.split(",").map(s => s.trim()))
    }, [value]);

    return (
        <div>
            <TextField
                multiline
                rows={rows}
                variant="outlined" 
                placeholder="Введите метки проекта, разделяя их между собой запятыми" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}