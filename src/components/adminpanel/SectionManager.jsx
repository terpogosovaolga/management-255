import CustomersBlock from "./sectionblocks/CustomersBlock";
import ProjectsBlock from "./sectionblocks/ProjectsBlock";
import UsersBlock from "./sectionblocks/UsersBlock";
import CategoriesBlock from "./sectionblocks/CategoriesBlock";
import ProfessionsBlock from "./sectionblocks/ProfessionsBlock";
import IndustriesBlock from "./sectionblocks/IndustriesBlock";
import TasksPatternsBlock from "./sectionblocks/TasksPatternsBlock";

export default function SectionManager({sec}) {
    switch (sec) {
        case 0:
            return <UsersBlock />
        case 1:
            return <CustomersBlock />
        case 2:
            return <ProjectsBlock />
        case 3:
            return <CategoriesBlock />
        case 4:
            return <ProfessionsBlock />
        case 5:
            return <IndustriesBlock />
        case 6:
            return <TasksPatternsBlock />
    }
}