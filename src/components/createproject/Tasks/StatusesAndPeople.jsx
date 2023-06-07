import { useState } from 'react';
import SelectPeople from './SelectPeople';
import { SelectedPeopleContext } from './OneTask';
export default function StatusesAndPeople({statuses, people}) {
    return (
        <div className="editing-content-sample-panel__wrapper"  style={{zIndex: 30}} >
			{
				statuses.map(s => <span onClick={() => console.log("slkfjsdlf")} className={"editing-panel-input__status editing-panel-input__status_"+s.color}>
				{s.name}
			</span>)
			}
            <span className="editing-content__line"></span>
            <span className={"editing-panel-input__status editing-panel-input__status_yellow"}>
				Будет согласовано
			</span>
            <span className="editing-content__line"></span>
            <SelectPeople people={people} />
		</div>
    )
}