import DataListInput from "../../common/inputs/DataListInput";
import TextInput from "../../common/inputs/TextInput";

export default function TaskPatternBlock() {
    return (
        <div className="editing-content-sample">
			<div className="editing-content-sample__header">
				Шаблон задачи
			</div>
			<div className="editing-content-sample__wrapper">
				<div className="editing-content-sample__input pattern-parent" style={{height: "50px"}}>
					<DataListInput options={[{id: 1, "name": "Разработка логотипа"}, {id: 2, "name": "Разработка логотипа 2"}]}/>
				</div>
				<a href="" className="editing-content-sample__link hover-transform">
					Применить
				</a>
				<a href="" className="editing-content-sample__link hover-transform">
					Сохранить задачи
				</a>
				<a href="" className="editing-content-sample__button hover-transform"></a>
			</div>
		</div>
    )
}