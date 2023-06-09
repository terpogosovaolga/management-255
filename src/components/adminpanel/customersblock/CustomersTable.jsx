import CustomerTr from "./CustomerTr";


export default function CustomersTable({customers}) {
    
    return (
        <div className="admin-panel-table__wrapper">
			<table className="admin-panel-table">
                <tr className="admin-panel-table__title">
                    <td className="admin-panel-table__content">
                        Наименование
                    </td>
                    <td className="admin-panel-table__content">
                        Ниша
                    </td>
                    <td className="admin-panel-table__content">
                        Проектов <br />
                        заказано
                    </td>
                    <td className="admin-panel-table__content">
                        Последний <br />
                        заказ
                    </td>
                </tr>

                {
                    customers.map(c => <CustomerTr customer={c} key={c.id} />)
                }

           </table>
        </div>
    )
}