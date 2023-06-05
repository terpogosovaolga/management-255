import { useEffect, useState, useLocation } from "react";
import LeftPanel from "../components/common/LeftPanel";
import HomeHeader from "../components/home/HomeHeader";
import projects from "../testdata/testdata.json";
import EditingPanel from "../components/projectpage/EditingPanel";
import EditingContent from "../components/projectpage/EditingContent";

export default function Project() {

    // const [projectId, setProjectId] = useState(1);
    const [project, setProject] = useState(projects[0]);



    return (
        <div className="wrapper">
            <section>
				<div className="panel">
					<div className="container panel__wrapper">
                        <LeftPanel />
                        <div className="panel-content">
                            <HomeHeader title={"Проекты студии"}/>
                            <div className="editing__wrapper">
                                {project && <EditingPanel project={project}/>}
                                {project && <EditingContent project={project}/>}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}