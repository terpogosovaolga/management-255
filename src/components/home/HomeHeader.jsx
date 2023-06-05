import { useState } from "react"

export default function HomeHeader({title}) {

    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
 
    return (
        <div className="panel-header">
			<div className="panel-header__title">
				{title}
			</div>
			<div className="panel-header__butons">
				<a href="" className="panel-header__button hover-transform">
					<span className="icon-notification"></span>
				</a>
				<div className="panel-header-user__wrapper">
					<div className="panel-header-user hover-transform">
						<span className="panel-header-user__img ibg">
							<img src="img/project/2.jpg" alt="" />
						</span>
						<span className="panel-header-user__text" onClick={() => setIsOpenProfileMenu(!isOpenProfileMenu)}>
							<span>Виктор А.</span>
							<span className="icon-pointer"></span>
						</span>
					</div>
					{   
                        isOpenProfileMenu && 
                        <div className="panel-header-user__list">
                            <a href="" className="panel-header-user__item">
                                lorem 1
                            </a>
                            <a href="" className="panel-header-user__item">
                                lorem 2
                            </a>
                            <a href="" className="panel-header-user__item">
                                lorem 3
                            </a>
                            <a href="" className="panel-header-user__item">
                                lorem 4
                            </a>
                            <a href="" className="panel-header-user__item">
                                lorem 5
                            </a>
                        </div>
                    }
				</div>
			</div>
		</div>
    )
}