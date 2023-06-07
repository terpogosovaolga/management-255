
import { useState } from "react";
import menu from '../../../assets/img/task-menu.svg';
import close from '../../../assets/img/close-x.svg';
import TextInput from "../../common/inputs/TextInput";
import statuses from '../../../testdata/taskstatuses.json';
import StatusesAndPeople from "./StatusesAndPeople";
import users from '../../../testdata/users.json';

export default function TaskBody({task, status_}) {

    
	const [status, setStatus] = useState(status_);
	const [isStatusesOpen, setIsStatusesOpen] = useState(false);
	const style = isStatusesOpen ? {
        boxShadow: "none",
		zIndex: 40
    } : {zIndex: 20}


    return (
        <div className="editing-content-sample__input">
			<TextInput placeholder={"Добавьте задачу проекта"} defVal={task.text}/>
			<div className="editing-content-sample-panel">
				<div className="editing-content-sample-panel__button">
					<div className="editing-content-sample-panel__button-wrapper">
						<span></span>
					</div>
				</div>
				<div className="editing-content-sample-panel">
					<div className="editing-content-sample-panel__button" onClick={() => setIsStatusesOpen(!isStatusesOpen)} style={style}>
						<div className="h100">
							<span className="d-flex justify-content-center ralign-items-center h100">
								{isStatusesOpen && <img src={close} alt="" width="70%" />}
								{!isStatusesOpen && <img src={menu} alt="" width="50%" />}
							</span>
						</div>
					</div>
					{isStatusesOpen && <StatusesAndPeople statuses={statuses} people={users}  />}
				</div>
			</div>
			<div className="editing-content-sample__reght-button">
				<a href="#" className="editing-content-sample__reght-button_top icon-pointer"></a>
				<a href="#" className="editing-content-sample__reght-button_center"></a>
				<a href="#" className="editing-content-sample__reght-button_bottom icon-pointer"></a>
			</div>
		</div>
    )
}