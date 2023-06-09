import pic from '../../assets/img/adminPanel/8.svg';

export default function TopMenu({openModal, text}) {
    return (
        <div className="admin-panel-wrapper-add pointer" onClick={() => {openModal ? openModal(true) : console.log()}}>
			<div className="admin-panel-wrapper-add__text">
				<img src={pic} alt="" className="admin-panel-wrapper-add__img" />
				<a style={{color: "#0075ff"}}>
					Добавить нового {text}
				</a>
			</div>
			<a className="admin-panel-wrapper-add__button">
				Добавить {text}
			</a>
		</div>
    )
}