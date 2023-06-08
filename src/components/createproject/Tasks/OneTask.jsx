import { Link } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskBody from "./TaskBody";
import statuses from '../../../testdata/taskstatuses.json';
import { TasksContext } from "../RightForm";


export const SelectedPeopleContext = createContext();

export default function OneTask({task, number}) {

	const [sel, setSel] = useState(task ? task.people : []);

	const level = number.split(".").length - 2; // уровень - это количество точек -1
	if (level < 0) level = 0;
    const style2 = {"paddingLeft": (level*2)+"rem"};

	const [status, setStatus] = useState(task ? statuses.find(s => s.id = task.status) : statuses[0].id);

	const [isSogl, setIsSogl] = useState(task ? task.is_sogl : true); 

	useEffect(() => {
		console.log('is sogl is changing to ' + isSogl);
	}, [isSogl]);

	const {tasks, setTasks} = useContext(TasksContext);

	const changeStatus = (id) => {
		const index = tasks.findIndex(t => t.id == task.id);
		task.status = id;
		const _tasks = tasks.slice();
		_tasks[index] = task;
		setTasks(_tasks);
		setStatus(id);
	}

	const toggleIsSogl = () => {
		console.log('changins is sogl, new value - ' + !isSogl);
		const index = tasks.findIndex(t => t.id == task.id);
		task.is_sogl = !isSogl;
		const _tasks = tasks.slice();
		_tasks[index] = task;
		setTasks(_tasks);
		setIsSogl(!isSogl);
	}

    return (
        <div className="editing-content-task" style={style2}>
			<SelectedPeopleContext.Provider value={{selectedPeople: sel, setSelectedPeople: setSel}}>
				<TaskHeader task={task} number={number} status={status} isSogl={isSogl}/>
				<TaskBody task={task} status_={status} setStatus={changeStatus} toggleIsSogl={toggleIsSogl}/>
			</SelectedPeopleContext.Provider>
		</div>
    );
}