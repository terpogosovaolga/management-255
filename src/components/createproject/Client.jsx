import DataListInput from "../common/inputs/DataListInput"


export default function Client() {
    return (
        <div className="editing-panel-input">
			<div className="editing-panel-input__title">
				Клиент
			</div>
             <div className="editing-panel-input__item_icon select" style={{display: "flex", alignItems: "center"}}>
                 <DataListInput options={["ООО Компания1", "ОАО Компания2"]} />
                 <span className="editing-panel-input__button hover-transform pointer"></span>
             </div>
         </div>
    )
}