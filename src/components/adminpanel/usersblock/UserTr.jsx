import { getDateDifference } from '../../../funcs/datesFunctions';
import professtions from '../../../testdata/professions.json';
import pic from '../../../assets/img/adminPanel/9.svg';
import { Link } from 'react-router-dom';

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
				<Link to={"/profile/"+user.id} className='pointer'>
					<img src={pic} alt="" />
				</Link>
			</td>
		</tr>
    )
}