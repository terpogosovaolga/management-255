
import Categories from './editingpanel/Categories';
import People from './editingpanel/People';
import Dates from './editingpanel/Dates';
import PreviewInfo from './editingpanel/PreviewInfo';

export default function EditingPanel({project}) {
    return (<div class="editing-panel">
			<div class="editing-panel__title">
				{project.name}
			</div>
			<div class="editing-panel__text">
				{project.description}
			</div>
			<span class="editing-panel__line"></span>
			<PreviewInfo client_link={project.client_link} password_link={project.password_link} is_open={project.is_open}/>
			<span class="editing-panel__line"></span>
			<Dates created_date={project.created_date} finish_date={project.finish_date} />
			<span class="editing-panel__line"></span>
			<div class="editing-panel-text-blok">
				<div class="editing-panel-text-blok__title">
					Клиент
				</div>
				<div class="editing-panel-text-blok__content">
					<span class="editing-panel-text-blok__item">
						{project.client.name}
					</span>
				</div>
			</div>
			<People title="Руководители проекта" people={project.managers}/>
			<People title="Иполнители проекта" people={project.members}/>
			<Categories categories={project.categories} />
			<div class="editing-panel-text-blok">
				<div class="editing-panel-text-blok__title">
					Метки проекта
				</div>
				<div class="editing-panel-text-blok__content editing-panel-text-blok__content_text">
					{project.tags}
				</div>
			</div>
		</div> )
}