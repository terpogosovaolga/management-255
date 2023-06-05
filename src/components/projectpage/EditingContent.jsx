
import ContentHeader from './editingcontent/ContentHeader';
import TasksBlock from './tasks/TasksBlock';
export default function EditingContent({project}) {

    return (
    <div class="editing-content">
        <ContentHeader project={project}/>
        <a href="#" class="editing-content-header__button hover-transform">
            Сохранить изменения 
        </a>
        <span class="editing-content__line"></span>
        <TasksBlock project_id={project.id}/>
        <span class="editing-content__line"></span>
    </div>)
}