import { getPrettyDate } from '../../../funcs/datesFunctions';
import pic from '../../../assets/img/adminPanel/9.svg';
import { Link } from 'react-router-dom';

export default function CustomerTr({customer}) {
    return (
        <tr className="admin-panel-table__body">
			<td className="admin-panel-table__img">
				<span className="ibg" style={{backgroundImage: "url("+customer.photo+")"}}>
				</span>
				<span className="admin-panel-table__text">
                    {
                        customer.name
                    }
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
                    {customer.niche.reduce((a,b) => a+", "+b)}
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
					{customer.ordered_projects}
				</span>
			</td>
			<td className="admin-panel-table__blok">
				<span className="admin-panel-table__text">
					{getPrettyDate(new Date(customer.last_order_date))}
				</span>
				<Link to={"/customer/"+customer.id} className='pointer'>
					<img src={pic} alt="" />
				</Link>
			</td>
		</tr>
    )
}