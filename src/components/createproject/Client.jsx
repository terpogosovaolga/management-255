import { useState } from "react"
import DataListInput from "../common/inputs/DataListInput";


export default function Client() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="editing-panel-input">
			<div className="editing-panel-input__title">
				Клиент
			</div>
             <div className="editing-panel-input__item_icon select" style={{display: "flex", alignItems: "center"}}>
                 <DataListInput options={[{id: 1, name: "ООО Компания1"}, {id: 2, name: "ОАО Компания2"}]} fieldName={"name"} width="100%"/>
                 <span className="editing-panel-input__button hover-transform pointer" onClick={() => setOpenModal(true)}></span>
             </div>
         </div>
    )
}