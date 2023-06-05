
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { useRef, useState } from 'react';

export default function SelectInput({text, placeholder, goodText, badText, length, pattern, items}) {

    // text - то, что написано сверху. если null, то сверху не будет параграфа 
    // placeholder он и в африке placeholder
    // goodText - то, что написано снизу инпута, если все введено правильно. Например, "Никому не сообщайте пароль" или пустая строка
    // badText - то, что написано внизу, если ошибка. Например, "Это поле обязательное" или "Название проекта должно содержать не менее 5 символов"
    // length - минимальная длина. Если поле обязательное, но без ограничения, то length=1. Если поле необязательное, то length = 0

    const [value, setValue] = useState("");
    return (
        <div>
            {text && <p className='inputname'>{text}</p>}
            <Select 
                // id="demo-simple-select" 
                // variant="outlined" 
                helperText={value.length < length ? badText : goodText} 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                error={value.length < length} 
                pattern={pattern ? pattern : ""}
            >
                {items.map((item, i) => <MenuItem key={i} value={item.id} >{item.value}</MenuItem>)}
                {/* <MenuItem value={items[i]}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </div>
    )
}