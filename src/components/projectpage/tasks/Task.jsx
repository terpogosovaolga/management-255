import { useState } from "react";
import { Link } from "react-router-dom";

export default function Task({task}) {

    const [isStatusesOpen, setIsStatusesOpen] = useState(false);

    return (
        <div className="editing-content-task">
        <div class={"editing-content-task-header "+task.parent_id ? "editing-content-task__pading-left":""}>
            <div class="editing-content-task-header__text">
                
                Задача {task.number}.
            </div>
            <div class="editing-content-task-header__list">
                {
                    task.people.map(p => <Link to={"/profile/"+p.id} class="editing-content-task-header__item hover-transform">
                    {p.fullname}
                </Link>)
                }
                <div class="editing-panel-input__status editing-panel-input__status_green">
                    {task.status}
                </div>
            </div>
        </div>
        <div class="editing-content-sample__input">
	    	<div class="editing-content-sample__input-text">
	    		{task.text}
	    	</div>
	    	<div class="editing-content-sample-panel">
	    		<div class="editing-content-sample-panel__button" onClick={() => setIsStatusesOpen(true)}>
	    			<div class="editing-content-sample-panel__button-wrapper">
	    				<span></span>
	    			</div>
	    		</div>
	    		{isStatusesOpen && <div class="editing-content-sample-panel__wrapper _active">
	    			<a href="" class="editing-panel-input__status editing-panel-input__status_green">
	    				В процессе
	    			</a>
	    			<a href="" class="editing-panel-input__status editing-panel-input__status_bacgraund-none editing-panel-input__status_yellow">
	    				Согласование
	    			</a>
	    			<a href="" class="editing-panel-input__status editing-panel-input__status_bacgraund-none editing-panel-input__status_blue">
	    				Выполнено
	    			</a>
	    		</div>}
	    	</div>
	    	<div class="editing-content-sample__reght-button">
	    		<a href="#" class="editing-content-sample__reght-button_top icon-pointer"></a>
	    		<a href="#" class="editing-content-sample__reght-button_center"></a>
	    		<a href="#" class="editing-content-sample__reght-button_bottom icon-pointer"></a>
	    	</div>
	    </div>
        </div>
    )
}