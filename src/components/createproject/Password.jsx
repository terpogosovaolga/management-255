import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Password() {

    const [value, setValue] = useState("");
    const length = 5;
    const [isFree, setIsFree] = useState(true); // true - публичная, false - с паролем
    const [style, setStyle] = useState({color: "red", borderColor: "red"});
    
    useEffect(() => {

        if (isFree) {
            setStyle({color: "red", 
            borderColor: "Red"});
        }
        else {
            setStyle({});
        }
    }, [isFree]);

    const handlePassword = () => {
        if (isFree && value.length >= length) {
            setIsFree(false);
        }
        else if (!isFree) {
            setIsFree(true);
        }
    }
    return (
        <div className="editing-panel-input">
				<div className="editing-panel-input__title">
					Задать пароль
				</div>
				<div className="editing-panel-input__body editing-panel-input__body_50-50">
                    {/* <input type="text" name="" class="editing-panel-input__item" placeholder="пароль" /> */}
                    <TextField 
                        type="text"
                        variant="outlined" 
                        helperText={value.length < length && !isFree ? "Задайте пароль" : ""} 
                        placeholder={"Введите пароль"} 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        error={value.length < length && !isFree} 
                        disabled={isFree ? false : true}
                    />
                    <a href="#" style={style} className="editing-panel-input__link hover-transform" onClick={handlePassword}>{isFree ? "Задать пароль" : "Сделать публичной"}</a>
                </div>
			</div>
        
    );
}