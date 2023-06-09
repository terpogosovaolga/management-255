import TopMenu from "../TopMenu";
import customers from '../../../testdata/customers.json';
import CustomersTable from "../customersblock/CustomersTable";
import { useState } from "react";
export default function CustomersBlock() {
    
    // true - открыто окно добавления
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"admin-panel-wrapper"}>
            <div className="admin-panel-wrapper__title">
                Список клиентов
            </div>
            <TopMenu text="клиента"/>
            <CustomersTable customers={customers}/>
            
            {/* <AddEmployeeModal open={isOpen} closeFunc={setIsOpen}/> */}
		</div>
    )
}