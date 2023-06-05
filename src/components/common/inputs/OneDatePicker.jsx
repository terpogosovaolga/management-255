import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
export default function OneDatePicker({text, value, setValue, minDate, maxDate}) {

    const [date, setDate] = useState(value);

    const handlePicker = () => {
        if (setValue) {
            setValue(date);
        }
    }

    return (
        <div class="editing-panel-input">
			<div class="editing-panel-input__title">
				{text}
			</div>
			<div class="editing-panel-input-data" style={{display: "block"}}>
                <div style={{marginLeft: 0}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            format="DD.MM.YYYY"
                            value={date}
                            onChange={(newValue) => {setDate(newValue); handlePicker()}}
                            minDate={minDate ? minDate : ""}
                            maxDate={maxDate ? maxDate : ""}
                        />
                    </LocalizationProvider>
                </div>
			</div>
		</div>
    )
}