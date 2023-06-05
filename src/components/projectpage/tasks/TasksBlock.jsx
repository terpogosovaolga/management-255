import alltasks from '../../../testdata/tasks.json';
import Task from './Task';
export default function TasksBlock({project_id}) {

    const comp = (a, b) => a.number - b.number;
    const tasks = alltasks.filter(t => t.project_id == project_id);

    const top_tasks = tasks.filter(t => t.parent_id == null).sort(comp);

    const getAllTasks = (task, nums) => {


        nums += task.number+".";
        const result = [<Task task={task} key={task.id} number={nums}/>];
        const children = tasks.filter(t => t.parent_id == task.id).sort(comp);

        for (const t of children) {
            result.push(...getAllTasks(t, nums));            
        }
        return result
    }

    return <>
        {
            top_tasks.map(t => getAllTasks(t, "")).map(elem => {return elem})
        }
    </>
}