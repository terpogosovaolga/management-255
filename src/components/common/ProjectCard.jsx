import {getPrettyDate, getDateDifference} from "../../funcs/datesFunctions";

export default function ProjectCard({project}) {

    const finish = new Date(project.finish_date);
    const created = new Date(project.created_date);
    const days = getDateDifference(created, finish); // сколько дней до завершения

    const completeness = Math.floor((project.completed_count / project.tasks_count) * 100); // выполнение проекта в процентах

    const short_count = 4; // сколько человек видно сразу

	const getColorOfProject = () => {
		if (project.status.includes("выполн")) return "";
		if (project.status.includes("отменен")) return "red";
		if (completeness < 50) return "yellow";
		return "green";
	}

	const color = getColorOfProject();

    return (
        <div class="project-block">
			<div class="project-block-header ibg" style={{backgroundImage: "url("+project.photo+")"}}>
				<div class="project-block-header__links">
                    {
                        project.categories.map((c,i) => <a href="" class="project-block-header__link">
						{c}
					    </a> )
                    }
				</div>
				<div class="project-block-header__title">
					{project.name}
				</div>
			</div>
			<div class="project-block__wrapper">
				<div class="project-block-days">
					<div class={"project-block__title project-block__title_"+color}>
                        {days} 
					</div>
					<div class="project-block__text">
						Дней до завершения
					</div>
				</div>
				<div class={"project-block-interest project-block-interest_"+Math.round(completeness / 5) * 5+" project-block-interest_"+color}>
					<div class={"project-block__title project-block__title_"+color}>
						{completeness}%
					</div>
					<div class="project-block__text">
						Процент завершения 
					</div>
				</div>
			</div>
			<div class="project-block__wrapper">
				<div class="project-block-status">
					<div class={"project-block__title project-block__title_"+color}>
						{project.status}
					</div>
					<div class="project-block__text">
						Статус проекта
					</div>
				</div>
				<div class="project-block-tasks">
					<div class={"project-block__title project-block__title_"+color}>
						{project.completed_count}<span>/{project.tasks_count}</span>
					</div>
					<div class="project-block__text">
						Задач выполнено 
					</div>
				</div>
			</div>
			<div class="project-block__wrapper">
				<div class="project-block-dates">
					<div class="project-block-dates__tetle">
						Начался
					</div>
					<div class="project-block__text">
						{getPrettyDate(created)}
					</div>
					<div class="project-block-dates__margin"></div>
					<div class="project-block-dates__tetle">
						Завершится
					</div>
					<div class="project-block__text">
                    {getPrettyDate(finish)}
					</div>
				</div>
				<div class="project-block-team">
					<div class="project-block-team__content">
						<div class="project-block-team__title">
							{project.members.length} чел.
						</div>
                        {

                        }
						<div class="project-block-team__text">
							Команда проекта
						</div>
						<div class="project-block-team__list">
                            {
                                project.members.map((m, i, arr) => {
                                    if (i <= short_count) {
                                        return <a href="#" class="project-block-team__link">
                                        {m.fullname + (i != short_count ? ", " : "...")}
                                        </a>
                                    }
                                })
                            }
						</div>
					</div>
					<div class="project-block-team-img">
						<div class="project-block-team-img__list">
                            {
                                project.members.map((m, i) => 
                                    <div class="project-block-team-img__item">
                                        <span class="ibg" style={{backgroundImage: "url("+m.photo+")"}}>
                                        </span>
                                    </div>
                                )
                            }
							
						</div>
						<div class="project-block-team-img__text">
							Посмотреть
							участников
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}