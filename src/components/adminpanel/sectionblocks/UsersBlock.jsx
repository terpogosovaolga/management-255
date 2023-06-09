import TopMenu from "../TopMenu";
import UsersTable from "../usersblock/UsersTable";
import users from '../../../testdata/users.json';
import { useState } from "react";
import AddEmployeeModal from "../modals/AddEmployeeModal";

export default function UsersBlock() {

    // true - открыто окно добавления
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"admin-panel-wrapper" + (isOpen ? " active" : "")}>
            <div className="admin-panel-wrapper__title">
                Список сотрудников
            </div>
            <TopMenu openModal={setIsOpen} text="сотрудника"/>
            <UsersTable users={users}/>
            <div className="admin-panel-wrapper__title mt-5">
                Список фрилансеров
            </div>
            {/* здесь будут какие-то другие юзеры */}
            <UsersTable users={users}/>
            <div className="admin-panel-wrapper__title mt-5">
                Список отстраненных сотрудников
            </div>
            {/* здесь будут какие-то другие юзеры */}
            <UsersTable users={users}/>
            <AddEmployeeModal open={isOpen} closeFunc={() => setIsOpen(false)}/>
		</div>
    )
}