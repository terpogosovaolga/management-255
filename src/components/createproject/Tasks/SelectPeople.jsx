import { Checkbox, FormControlLabel } from "@mui/material";
import CheckBoxInput from "../../common/inputs/CheckboxInput";
import { useContext, useState } from "react";
import { SelectedPeopleContext } from "./OneTask";

export default function SelectPeople({people}) {

	const {selectedPeople, setSelectedPeople} = useContext(SelectedPeopleContext);
    console.log(selectedPeople);
    // работает только добавление, удаление нет
    const toggleSelected = (p) => {
        const index = selectedPeople.findIndex(p2 => p2.id == p.id);
        let newm = [];
        if (index > -1) {
            console.log('removing', index);
            newm = selectedPeople.filter((_,i) => i!=index);
        }
        else  {
            console.log('adding');
            newm = selectedPeople;
            newm.push(p);
        }
        console.log(newm);
        setSelectedPeople(newm);
    }
    return (
        people.map(p => 
            {
                const man = !selectedPeople && selectedPeople.length < 1 ? false : selectedPeople.find(p2 => p.id == p2.id);
                return <CheckBoxInput key={p.id} object={p} fieldname={'fullname'} defVal={man ? true : false } oncl={() => toggleSelected(p)} style={{marginLeft: "4px"}}/>
            }
        )
    )
}