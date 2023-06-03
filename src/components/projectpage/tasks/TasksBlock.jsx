import alltasks from '../../../testdata/tasks.json';
import Task from './Task';
export default function TasksBlock({project_id}) {

    const tasks = alltasks.filter(t => t.project_id == project_id);

    const top_tasks = tasks.filter(t => t.parent_id == null);
    return <>
        {
            top_tasks.map(t => {
                return <Task task={t} key={t.id} />

            })
        }
    </>
}