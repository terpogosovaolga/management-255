import download from '../../../assets/img/download-icon.svg';
import { getDateDifference } from '../../../funcs/datesFunctions';
import Completeness from './Completeness';
import StandartBlock from './StandartBlock';
export default function ContentHeader({project}) {

    const completeness = Math.floor((project.completed_count / project.tasks_count) * 100); // выполнение проекта в процентах

    const getColorOfProject = () => {
		if (project.status.includes("выполн")) return "";
		if (project.status.includes("отменен")) return "red";
		if (completeness < 50) return "yellow";
		return "green";
	}

	const color = getColorOfProject();


    return (
        <div class="editing-content-header ibg" style={{backgroundImage: "url("+project.photo+")"}}>
            
            <a href="#" class="editing-content-header__link hover-transform">
                <img src={download} alt="" />
            </a>
            <div class="editing-content-header__list">
                <StandartBlock days={getDateDifference(new Date(project.created_date), new Date(project.finish_date))} title={"Дней до завершения"} color={color}/>

                <StandartBlock days={completeness+"%"} title={"Процент завершения"} color={color} percents={Math.round(completeness/5)*5}/>
                <StandartBlock days={project.status} title={"Статус проекта"} color={color}/>
                <Completeness comp={project.completed_count} all={project.tasks_count}  color={color}/>
                
            </div>
        </div>
    );
}