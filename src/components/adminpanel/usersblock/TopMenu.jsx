import pic from '../../../assets/img/adminPanel/8.svg';

export default function TopMenu() {
    return (
        <div className="admin-panel-wrapper-add pointer">
			<div className="admin-panel-wrapper-add__text">
				<img src={pic} alt="" className="admin-panel-wrapper-add__img" />
				<a style={{color: "#0075ff"}}>
					Добавить нового сотрудника
				</a>
			</div>
			<a className="admin-panel-wrapper-add__button">
				Добавить сотрудника
			</a>
		</div>
    )
}