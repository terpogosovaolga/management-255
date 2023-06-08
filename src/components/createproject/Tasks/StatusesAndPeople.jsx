import { useState } from 'react';
import SelectPeople from './SelectPeople';
import { SelectedPeopleContext } from './OneTask';
import removepic from '../../../assets/img/close-modal.svg';
import DeleteTaskConfirm from '../modals/DeleteTaskConfirm';
export default function StatusesAndPeople({statuses, people, removeTask, changeStatus, toggleIsSogl}) {

	const [isConfirming, setIsConfirming] = useState(false);

    return (
        <><div className="editing-content-sample-panel__wrapper"  style={{zIndex: 30}} >
			{
				statuses.map(s => <span key={s.id} className={"editing-panel-input__status editing-panel-input__status_"+s.color} onClick={() => changeStatus(s)}>
				{s.name}
			</span>)
			}
            <span className="editing-content__line"></span>
            <span className={"editing-panel-input__status editing-panel-input__status_yellow"} onClick={() =>toggleIsSogl()}>
				Будет согласовано
			</span>
            <span className="editing-content__line"></span>
			<span style={{fontSize: "1rem", fontFamily: "Montserrat"}}>Участники задачи</span>
            <SelectPeople people={people} />
            <span className="editing-content__line"></span>
			<div className='delete-task-btn d-flex align-items-center' onClick={() => setIsConfirming(true)}>
				<img src={removepic} alt="" style={{marginRight: "0.5rem"}}/>
				<span >Удалить задачу</span>
			</div>
		</div>

		<DeleteTaskConfirm open={isConfirming} closeFunc={() => setIsConfirming(false)} confirmFunc={removeTask} isSubTasks={true} />
		</>
    )
}