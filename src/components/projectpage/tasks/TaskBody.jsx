
import { useState } from 'react';
import close from '../../../assets/img/close-x.svg';
import menu from '../../../assets/img/task-menu.svg';
import statuses from '../../../testdata/taskstatuses.json';

export default function TaskBody({task}) {

    const [isStatusesOpen, setIsStatusesOpen] = useState(false);

    const style = isStatusesOpen ? {
        boxShadow: "none"
    } : {}

    return (<div className="editing-content-sample__input">
    <div className="editing-content-sample__input-text">
        {task.text}
    </div>
    <div className="editing-content-sample-panel">
        <div className="editing-content-sample-panel__button" onClick={() => setIsStatusesOpen(!isStatusesOpen)} style={style}>
            <div className="h100">
                <span className="d-flex justify-content-center ralign-items-center h100">
                    {isStatusesOpen && <img src={close} alt="" width="70%" />}
                    {!isStatusesOpen && <img src={menu} alt="" width="50%" />}
                </span>
            </div>
        </div>
        {isStatusesOpen && <div className="editing-content-sample-panel__wrapper _active"  style={{zIndex: 30}}>
            {
                statuses.map(s => <a href="" className={"editing-panel-input__status editing-panel-input__status_"+s.color}>
                {s.name}
            </a>)
            }
        </div>}
    </div>
    <div className="editing-content-sample__reght-button">
        <a href="#" className="editing-content-sample__reght-button_top icon-pointer"></a>
        <a href="#" className="editing-content-sample__reght-button_center"></a>
        <a href="#" className="editing-content-sample__reght-button_bottom icon-pointer"></a>
    </div>
</div>)
}