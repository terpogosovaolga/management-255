import { useEffect, useState, useLocation } from "react";
import LeftPanel from "../components/common/LeftPanel";
import HomeHeader from "../components/home/HomeHeader";
import LeftForm from "../components/createproject/LeftForm";
import "../assets/css/form.css";
export default function CreateProject() {

    return (
        <div className="wrapper">
            <section>
				<div className="panel">
					<div className="container panel__wrapper">
                        <LeftPanel />
                        <div className="panel-content">
                            <HomeHeader title={"Проекты студии"}/>
                            <div className="editing__wrapper">
                                <LeftForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}