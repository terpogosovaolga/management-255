import { useState } from "react";
import data from '../../../testdata/users.json';
import UserTr from "./UserTr";

export default function UsersTable() {

    const [users, setUsers] = useState(data);
    
    return (
        <div className="admin-panel-table__wrapper">
			<table className="admin-panel-table">
                <tr className="admin-panel-table__title">
                    <td className="admin-panel-table__content">
                        ФИО
                    </td>
                    <td className="admin-panel-table__content">
                        Должность
                    </td>
                    <td className="admin-panel-table__content">
                        Завершено <br />
                        проектов
                    </td>
                    <td className="admin-panel-table__content">
                        Работает <br />
                        в студии
                    </td>
                </tr>

                {
                    users.map(u => <UserTr user={u} key={u.id} />)
                }

           </table>
        </div>
    )
}