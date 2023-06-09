import ProjectTr from "./ProjectTr";
import statuses from '../../../testdata/taskstatuses.json';

export default function ProjectsTable({projects}) {


    return (
        <div class="admin-panel-table__wrapper">
			<table class="admin-panel-table">
				<tr class="admin-panel-table__title">
					<td class="admin-panel-table__content admin-panel-table__content_15">
						Превью
					</td>
					<td class="admin-panel-table__content admin-panel-table__content_40">
						Название
					</td>
					<td class="admin-panel-table__content admin-panel-table__content_10">
						% 
					</td>
					<td class="admin-panel-table__content admin-panel-table__content_15">
						Статус
					</td>
					<td class="admin-panel-table__content admin-panel-table__content_20">
						Дней <br />
						до завершения
					</td>
				</tr>
                {
                    projects.map(p => <ProjectTr project={p}/>)
                }
			</table>
		</div>
    )
}