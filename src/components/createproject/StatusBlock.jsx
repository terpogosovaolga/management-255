import { useEffect, useState } from "react"
import DataListInput from "../common/inputs/DataListInput";

export default function StatusBlock({data, selected, handleSaveData}) {

    const [statuses, setStatuses] = useState(data);
    const [activeItem, setActiveItem] = useState(selected);

    console.log(activeItem);

    return (
        <div className="editing-panel-input">
				<div className="editing-panel-input__title">
					Статус проекта
				</div>
				{activeItem && <div className={"editing-panel-input__status editing-panel-input__status_"+activeItem.color}>
					{activeItem.name}
				</div>}
                
				<div className="editing-panel-input__body editing-panel-input__body_80-20">
                    <DataListInput options={statuses} fieldName="name" active={activeItem} handleFunc={setActiveItem}/>
					<span href="#" className="save-edit-project-button hover-transform" onClick={handleSaveData}>Сохранить изменения </span>
				</div>
			</div>
    )
}