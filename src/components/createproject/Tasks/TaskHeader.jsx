import { Link } from "react-router-dom";
import { SelectedPeopleContext } from "./OneTask";
import { useContext, useState } from "react";


export default function TaskHeader({number, task, status, isSogl}) {
    
	// const [new_sogl, setIsSogl] = useState(isSogl);
	console.log(isSogl);

	const {selectedPeople, setSelectedPeople} = useContext(SelectedPeopleContext);
    return (
        <div className="editing-content-task-header">
			<div className="editing-content-task-header__text">
				Задача {number}
			</div>
			
			<div className="editing-content-task-header__list">
				{   task && selectedPeople && selectedPeople.length != 0 &&
					selectedPeople.map(p => 
						<Link to={"/profile/"+p.id} className="editing-content-task-header__item hover-transform" key={p.id}>
							{p.fullname}
						</Link>)
				}
				<div className="d-inline-flex justify-content-end align-items-center">
					{!isSogl && <span className="task-on-agreement-marker"></span>}
					<div className={"editing-panel-input__status editing-panel-input__status_"+status.color}>
						{status.name}
					</div>
				</div>
			</div>
		</div>
    )
}