import LeftPanel from "../components/common/LeftPanel";
import HomeHeader from "../components/home/HomeHeader";
import HomeFilters from "../components/home/HomeFilters";
import AllProjectsBlock from "../components/home/AllProjectsBlock";
export default function Home() {
    return (
        <div className="wrapper">
            <section>
				<div className="panel">
					<div className="container panel__wrapper">
                        <LeftPanel />
                        <div className="panel-content">
                            <HomeHeader />
                            <HomeFilters />
                            <AllProjectsBlock />
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}