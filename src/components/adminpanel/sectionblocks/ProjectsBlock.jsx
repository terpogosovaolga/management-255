import Filters from "../projectsblock/Filters";
import projects from '../../../testdata/testdata.json';
import ProjectsTable from "../projectsblock/ProjectsTable";

export default function ProjectsBlock() {
    return (
        <div className="admin-panel-wrapper">
            <Filters />
            <ProjectsTable projects={projects} />
        </div>
    )
}