import { useContext, useState } from "react"
import OneTask from "./Tasks/OneTask";
import TaskButtonAdding from "./Tasks/TaskButtonsAdding";

import { TasksContext } from "./RightForm";


export default function EditingTasksBlock() {
    const comp = (a, b) => a.number - b.number;
    
    const {tasks, setTasks} = useContext(TasksContext);

    const top_tasks = tasks.length > 0 ? tasks.filter(t => t.parent_id == null).sort(comp) : {};
    const getAllTasks = (task, nums) => {
        nums += task.number+".";
        const result = [<OneTask task={task} key={task.id} number={nums}/>];
        const children = tasks.filter(t => t.parent_id == task.id).sort(comp);

        let flag = 0;
        for (const t of children) {
            result.push(...getAllTasks(t, nums));
            flag = 1;            
        }
        if (!flag) addButtons(result, nums);
        return result;
    }

    const addButtons = (elems, nums) => {
        let level = nums.split(".").length - 2; // уровень - это количество точек -1
	    if (level < 0) level = 0;
        elems.push(<TaskButtonAdding nums={nums} level={level}/>)
    }
    return (
        <>
            
                {   tasks.length > 0 && 
                    top_tasks.map((t) => getAllTasks(t, "").map(elem => {return elem}))
                }
                {
                    
                }
                {
                    tasks.length == 0 && 
                    <><OneTask task={""} key={0} number={"1."}/>
                    <TaskButtonAdding nums={"1."} level={1} /></>
                }
        </>
    )
}