import { useEffect, useState } from "react"
import LeftPanel from "../components/common/LeftPanel";
import HomeHeader from "../components/home/HomeHeader";
import HomeFilters from "../components/home/HomeFilters";
import AllProjectsBlock from "../components/home/AllProjectsBlock";
import AdminMenu from "../components/adminpanel/AdminMenu";
import { useLocation, useNavigate } from "react-router-dom";
import SectionManager from "../components/adminpanel/SectionManager";
export default function AdminPanel() {

    const url = useLocation().pathname;
    const sectionName = url.split("/")[2];

    const navigate = useNavigate();

    const sectionArray = ["users", "customers", "projects", "categories", "professions", "industries", "task-patterns"];
    const sectionGuess = sectionArray.indexOf(sectionName.toLowerCase().trim());

    const [section, setSection] = useState(sectionName && sectionGuess > 0 ? sectionGuess : 0);

    useEffect(() => {
        navigate("/admin/"+sectionArray[section]);
    }, [section]);
    return (
        <div className="wrapper">
            <section>
				<div className="panel">
					<div className="container panel__wrapper">
                        <LeftPanel />
                        <div className="panel-content">
                            <HomeHeader title={"Админ панель"}/>
                            <div className="admin-panel" style={{fontSize: "1rem"}}>
                                <AdminMenu sec={section} setSec={setSection}/>
                                <SectionManager sec={section}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}