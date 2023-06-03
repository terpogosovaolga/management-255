import ProjectCard from "../common/ProjectCard"
import projects from "../../testdata/testdata.json";

export default function AllProjectsBlock() {
    return (
        <div class="project__body">
            {
                projects.map((p) => <ProjectCard key={p.id} project={p} />)
            }
        </div>
    )
}