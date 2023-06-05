import { Link } from "react-router-dom"
import statuses from '../../../testdata/taskstatuses.json';

export default function TaskHeader({task, number}) {
    
    const status = statuses.find(s => s.id == task.status);

    return (
        <div className={"editing-content-task-header "+(task.parent_id ? "editing-content-task__pading-left":"")}>
            <div className="editing-content-task-header__text">
                Задача {number}
            </div>
            <div className="editing-content-task-header__list">
                {
                    task.people.map(p => <Link to={"/profile/"+p.id} className="editing-content-task-header__item hover-transform">
                    {p.fullname}
                </Link>)
                }
                <div className={"editing-panel-input__status editing-panel-input__status_"+status.color}>
                    {status.name}
                </div>
            </div>
        </div>
    )
}