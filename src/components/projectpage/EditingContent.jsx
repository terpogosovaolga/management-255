import download from '../../assets/img/download-icon.svg';
import { getDateDifference } from '../../funcs/datesFunctions';
import TasksBlock from './tasks/TasksBlock';
export default function EditingContent({project}) {

    const completeness = Math.floor((project.completed_count / project.tasks_count) * 100); // выполнение проекта в процентах

    return <div class="editing-content">
    <div class="editing-content-header ibg" style={{backgroundImage: "url("+project.photo+")"}}>
        
        <a href="#" class="editing-content-header__link hover-transform">
            <img src={download} alt="" />
        </a>
        <div class="editing-content-header__list">
            <div class="project-block-days">
                <div class="project-block__title project-block__title_green">
                    {getDateDifference(new Date(project.created_date), new Date(project.finish_date))}
                </div>
                <div class="project-block__text">
                    Дней до завершения
                </div>
            </div>
            <div class="project-block-interest project-block-interest_75 project-block-interest_green">
                <div class="project-block__title project-block__title_green">
                    {completeness}%
                </div>
                <div class="project-block__text">
                    Процент завершения 
                </div>
            </div>
            <div class="project-block-status">
                <div class="project-block__title project-block__title_green">
                    {project.status}
                </div>
                <div class="project-block__text">
                    Статус проекта
                </div>
            </div>
            <div class="project-block-tasks">
                <div class="project-block__title project-block__title_green">
                    {project.completed_count}<span>/{project.tasks_count}</span>
                </div>
                <div class="project-block__text">
                    Задач выполнено 
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="editing-content-header__button hover-transform">
        Сохранить изменения 
    </a>
    <span class="editing-content__line"></span>
    <TasksBlock project_id={project.id}/>
    <span class="editing-content__line"></span>
    
</div>
}