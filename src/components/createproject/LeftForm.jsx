import TextInput from "../common/inputs/TextInput";
import TextArea from "../common/inputs/TextArea";
import GenAddress from "./GenAddress";
import PreviewAddress from "./PreviewAddress";
import { useState } from "react";
import Password from "./Password";
import ProjectDatesInputs from "./ProjectDatesInputs";
import SelectInput from "../common/inputs/SelectInput";
import DataListInput from "../common/inputs/DataListInput";
import Client from "./Client";
import MultipleSelect from "../common/inputs/MultipleSelect";
import TagsInput from "./TagsInput";
import Switcher from "../common/inputs/Switcher";

export default function LeftForm() {

    const [link, setLink] = useState("Project_255");

    return (
        <form action="#" className="editing-panel">
            <TextInput 
                text="Название" 
                goodText="" 
                badText="Обязательное поле" 
                placeholder="Добавьте название проекта" 
                length={1} 
            />
            <TextArea
                text="Описание" 
                goodText="" 
                badText="Обязательное поле" 
                placeholder="Добавьте описание проекта" 
                length={1} 
                rows={4}
            />
            <span className="editing-panel__line"></span>
            <div className="editing-panel-input">
				<div className="editing-panel-input__title">
					Адрес
				</div>
				<GenAddress link={link} setLink={setLink}/>
			</div>
            <div className="editing-panel-link mt-3">
				<div className="editing-panel-link__title">
					Ссылка на просмотр проекта 
				</div>
				<PreviewAddress link={link}/>
			</div>
            <Password />
            <span className="editing-panel__line mt-3"></span>
            <ProjectDatesInputs />
            <span className="editing-panel__line mt-3"></span>
            <Client />
            <div class="editing-panel-input">
				<div class="editing-panel-input__title">
					Руководитель проекта
				</div>
				<MultipleSelect 
                    options={[
                        {id: 1, name: "Алексеев Алексей"}, {id: 2, name: "Иванова Ирина"}
                    ]}
                    fieldName="name"
                />
			</div>
            <div class="editing-panel-input">
				<div class="editing-panel-input__title">
					Исполнитель проекта
				</div>
				<MultipleSelect 
                    options={[
                        {id: 1, name: "Алексеев Алексей"}, {id: 2, name: "Иванова Ирина"}
                    ]}
                    fieldName="name"
                    id="ispolnitel"
                />
			</div>
            <span class="editing-panel__line mt-3"></span>
            <div class="editing-panel-input">
				<div class="editing-panel-input__title">
					Рубрика проекта
				</div>
				<div class="editing-panel-input__body editing-panel-input__body_80-20">
					<div class="editing-panel-input__item_icon select">
						<MultipleSelect options={[
                                {id: 1, title: "брендбук"}, {id: 2, title: "фирменный стиль"}
                            ]}
                            fieldName="title"/>
					</div>
					<a href="#" class="editing-panel-input__button hover-transform"></a>
				</div>
			</div>
            <div class="editing-panel-input">
				<div class="editing-panel-input__title">
					Метки проекта
				</div>
                <TagsInput />
			</div>
            <span class="editing-panel__line mt-3"></span>
            <div class="editing-panel-checkbox">
				<Switcher rightText="Скрыть от других руководителей"/>
				<Switcher rightText="Скрыть от других исполнителей"/>
				<Switcher rightText="Скрыть из общего списка проектов"/>
				<Switcher rightText="Скрыть для клиента"/>
			</div>
        </form>)
}