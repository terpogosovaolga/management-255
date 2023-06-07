import { Link } from "react-router-dom";
import { SelectedPeopleContext } from "./OneTask";
import { useContext, useState } from "react";


export default function TaskHeader({number, task, status}) {
    
	const {selectedPeople, setSelectedPeople} = useContext(SelectedPeopleContext);
    return (
        <div className="editing-content-task-header">
				<div className="editing-content-task-header__text">
					Задача {number}
				</div>
				<div className="editing-content-task-header__list">
					{   task && selectedPeople && 
						selectedPeople.map(p => 
							<Link to={"/profile/"+p.id} className="editing-content-task-header__item hover-transform" key={p.id}>
								{p.fullname}
							</Link>)
					}
					
					<div className={"editing-panel-input__status editing-panel-input__status_"+status.color}>
						{status.name}
					</div>
				</div>
			</div>
    )
}