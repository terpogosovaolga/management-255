import pic from '../../../assets/img/adminPanel/11.svg';
import { getDateDifference } from '../../../funcs/datesFunctions';
import statuses from '../../../testdata/taskstatuses.json';
import {Link} from 'react-router-dom';
export default function ProjectTr({project}) {

    const status = statuses.find(s => s.name == project.status);
    const completeness = Math.floor((project.completed_count / project.tasks_count) * 100); // выполнение проекта в процентах

    return (
        <tr class="admin-panel-table__body">
			<td class="admin-panel-table__img admin-panel-table__content_15">
				<span class="ibg" style={{backgroundImage: "url("+project.photo+")"}}>
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_40">
				<span class="admin-panel-table__text">
					{project.name}
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_10">
				<span class={"admin-panel-table__text admin-panel-table__text_"+(status.color)} style={{fontWeight: "600"}}>
					{completeness}%
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_15">
				<div class={"editing-panel-input__status editing-panel-input__status_"+(status.color)}>
					{project.status}
				</div>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_20">
				<span class="admin-panel-table__text">
					{getDateDifference(new Date(project.created_date), new Date(project.finish_date))} дней
				</span>
				<Link to={"/editproject/"+project.id}> <img src={pic} alt="" /> </Link>
			</td>
		</tr>
    )
} 