import dayjs from "dayjs";
import OneDatePicker from "../common/inputs/OneDatePicker";
import { useEffect, useState } from "react";

export default function ProjectDatesInputs() {

    const [beginDate, setBeginDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    useEffect(() => {
        if (beginDate.isAfter(endDate)) {
            setEndDate(beginDate);
        }
    }, [beginDate]);
    return (
        <>
            <OneDatePicker text="Дата начала проекта" value={beginDate} setValue={setBeginDate}/>
            <OneDatePicker text="Дата конца проекта" value={beginDate} setValue={setEndDate} minDate={beginDate} />
        </>
        
    )
}