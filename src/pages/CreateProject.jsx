import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LeftPanel from "../components/common/LeftPanel";
import HomeHeader from "../components/home/HomeHeader";
import LeftForm from "../components/createproject/LeftForm";
import "../assets/css/form.css";
import RightForm from "../components/createproject/RightForm";
import projects from "../testdata/testdata.json";
export default function CreateProject() {

    const url = useLocation().pathname;
    const id = url.split("/")[2];

    console.log('id is ' + id);

    const title = id ? "Редактирование проекта" : "Проекты студии"; 

    console.log(title);
    const project = id ? projects.find(p => p.id == id) : false;

    return (
        <div className="wrapper">
            <section>
				<div className="panel">
					<div className="container panel__wrapper">
                        <LeftPanel />
                        <div className="panel-content">
                            <HomeHeader title={title}/>
                            <div className="editing__wrapper">
                                <LeftForm project={project}/>
                                <RightForm project={project}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}