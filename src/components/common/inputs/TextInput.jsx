
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';

export default function TextInput({text, placeholder, goodText, badText, length, defVal, type, pattern, val, setVal}) {

    const [value, setValue] = useState(val ? val : "");
    // text - то, что написано сверху. если null, то сверху не будет параграфа 
    // placeholder он и в африке placeholder
    // goodText - то, что написано снизу инпута, если все введено правильно. Например, "Никому не сообщайте пароль" или пустая строка
    // badText - то, что написано внизу, если ошибка. Например, "Это поле обязательное" или "Название проекта должно содержать не менее 5 символов"
    // length - минимальная длина. Если поле обязательное, но без ограничения, то length=1. Если поле необязательное, то length = 0

    // const [value, setValue] = useState(defVal ? defVal : "");
    return (
        <div>
            {text && <p className='inputname'>{text}</p>}
            <TextField 
                variant="outlined" 
                helperText={value.length < length ? badText : goodText} 
                placeholder={placeholder} 
                value={value ? value : ""} 
                onChange={(e) => {setValue(e.target.value); setVal(e.target.value)}} 
                error={value.length < length} 
                pattern={pattern ? pattern : ""}
                type={type ? type : "text"}
                sx={{fontFamily: "Montserrat"}}
            />
        </div>
    )
}