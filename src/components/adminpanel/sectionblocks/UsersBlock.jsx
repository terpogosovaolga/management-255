import TopMenu from "../usersblock/TopMenu";
import UsersTable from "../usersblock/UsersTable";

export default function UsersBlock() {
    return (
        <div className="admin-panel-wrapper">
            <div className="admin-panel-wrapper__title">
                Список сотрудников
            </div>
            <TopMenu />
            <UsersTable />
		</div>
    )
}