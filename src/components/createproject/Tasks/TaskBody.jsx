
import { useContext, useState } from "react";
import menu from '../../../assets/img/task-menu.svg';
import close from '../../../assets/img/close-x.svg';
import TextInput from "../../common/inputs/TextInput";
import statuses from '../../../testdata/taskstatuses.json';
import StatusesAndPeople from "./StatusesAndPeople";
import users from '../../../testdata/users.json';
import { TasksContext } from "../RightForm";
import { changeNumberOfTasks } from "../../../funcs/tasksFunctions";

export default function TaskBody({task, status_, setStatus, toggleIsSogl}) {

	const {tasks, setTasks} = useContext(TasksContext);
	// удаляет задачу и все подзадачи. Вызывается из StatusesAndPeople
	const removeTask = () => {
		const _tasks = tasks.slice();
		let index = _tasks.findIndex(t => t.id == task.id);
		let _tasks2 = removeChild(_tasks, task.id);
		_tasks2.splice(index, 1);
		changeNumberOfTasks(_tasks2, task.number+1, task.number, task.parent_id);
		setTasks(_tasks2);
	}

	// рекурсивно удаляет все подзадачи задачи и их подзадачи  и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи и их подзадачи..
	const removeChild = (array, parent) => {
		const ids = [];
		for (const a of array) {
			if (a.parent_id == parent) {
				ids.push(a.id);
			}
		}
		let array2 = array.slice();
		for (const i of ids) {
			array2 = removeChild(array, i);
		}
		let array3 = array2.filter(a => a.parent_id != parent);
		return array3;
	}

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
					{isStatusesOpen && <StatusesAndPeople statuses={statuses} people={users} removeTask={removeTask} changeStatus={setStatus} toggleIsSogl={toggleIsSogl}/>}
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