import EditProjectImage from "./EditProjectImage";
import EditingTasksBlock from "./EditingTasksBlock";
import TaskPatternBlock from "./Tasks/TaskPatternBlock";
import data from '../../testdata/tasks.json';
import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext({});
export default function RightForm() {

    const [tasks1, setTasks2] = useState([]);
    const handleTasks = (t) => {
        setTasks2(t);
    }

    useEffect(() => {
        console.log('получен новый список тасков : ');
        console.log(tasks1);
    }, [tasks1]);


    return (
        <div className="editing-content">
            <EditProjectImage image={""} />
            <TaskPatternBlock />
            <span className="editing-content__line mt-3"></span>
            {(tasks1 || !tasks1) && <TasksContext.Provider value={{tasks: tasks1, setTasks: (t) => handleTasks(t)}}>
                <EditingTasksBlock />
            </TasksContext.Provider>}
        </div>
    );
}