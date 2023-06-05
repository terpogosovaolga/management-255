import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import copy from '../../assets/img/document-copy.svg';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { useEffect, useState } from 'react';
export default function GenAddress({link, setLink}) {

    const [value, setValue] = useState("https://site.com/"+link);

    const req = "https://site.com/"; // та часть ссылки, которая обязательно должна быть в ней

    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setIsValid(value.includes(req));
        setLink(value.split("/")[3]);
    }, [value]);

    const copyValue = () => {
        navigator.clipboard.writeText(value);
        setHelper("Ссылка скопирована!");
        setTimeout(() => {
            setHelper("");
        }, 1500);
    }

    const [helper, setHelper] = useState("");

    return (
        <div class="copia-content copia-content_100" style={{position: "relative"}}>
            <TextField 
                id="link"
                variant="outlined"
                onChange={e => setValue(e.target.value)}
                value={value}
                error={!isValid}
                helperText={isValid ? helper : "Неверная ссылка"}
            />
            <img src={copy} style={{position: "absolute", top: "16px", right: "14px"}} onClick={copyValue}/>
        </div>
    )
}