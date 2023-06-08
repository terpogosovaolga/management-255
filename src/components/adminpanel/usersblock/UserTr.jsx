import { getDateDifference } from '../../../funcs/datesFunctions';
import professtions from '../../../testdata/professions.json';

export default function UserTr({user}) {
    return (
        <tr className="admin-panel-table__body">
			<td className="admin-panel-table__img">
				<span className="ibg" style={{backgroundImage: "url("+user.photo+")"}}>
				</span>
				<span className="admin-panel-table__text">
                    {
                        user.surname + " " + user.name[0] + ". " + (user.patronymic ? user.patronymic[0]+"." : "")
                    }
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
                    {professtions.find(p => p.id == user.profession).name }
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
					{user.completed_projects}
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
					{getDateDifference(new Date(user.date), new Date())} дня
				</span>
				<img src="img/adminPanel/9.svg" alt="" />
			</td>
		</tr>
    )
}