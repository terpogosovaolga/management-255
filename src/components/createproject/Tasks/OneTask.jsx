import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskBody from "./TaskBody";
import statuses from '../../../testdata/taskstatuses.json';


export const SelectedPeopleContext = createContext();

export default function OneTask({task, number}) {

	const [sel, setSel] = useState(task ? task.people: {});

	const level = number.split(".").length - 2; // уровень - это количество точек -1
	if (level < 0) level = 0;
    const style2 = {"paddingLeft": (level*2)+"rem"};

	const [status, setStatus] = useState(task ? statuses.find(s => s.id = task.status) : statuses[0]);
    return (
        <div className="editing-content-task" style={style2}>
			<SelectedPeopleContext.Provider value={{selectedPeople: sel, setSelectedPeople: setSel}}>
				<TaskHeader task={task} number={number} status={status}/>
				<TaskBody task={task} status_={status}/>
			</SelectedPeopleContext.Provider>
		</div>
    );
}