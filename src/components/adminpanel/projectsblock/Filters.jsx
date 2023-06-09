import { useState } from "react";

export default function Filters () {

    const categories = [{id: 2, name: "Логотип"}, {id: 3, name: "Брендбук"}, {id: 4, name: "Айдентика"}, {id: 5, name: "Моушн дизайн"}, {id: 6, name: "Паттерн"}, {id: 7, name: "Реклама"}, {id: 8, name: "Видео презентации"}, {id: 9, name: "Сайты"}, {id: 10, name: "Сторис"}];

    const shortcount = 3; // сколько категорий видно сразу 

    const [activeIndex, setActiveIndex] = useState(-1); // индекс категории в массиве, а не id. если Все, то -1
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div class="project-header">
			<div class="project-header__text">
				<span class="project-header__text_big">Сортировка:</span> сначала новые
			</div>
			<div class="project-header__links _active">
                    <span className={"project-header__link hover-transform pointer"+ (activeIndex == -1 ? " project-header__link_black" : "")} onClick={() => setActiveIndex(-1)}>
                        Все
                    </span>
                {
                    categories.map((c, i) => {
                        if (isOpen || i < shortcount) {
                                return  (<span key={c.id} className={"project-header__link hover-transform pointer"+ (i == activeIndex ? " project-header__link_black" : "")} onClick={() => setActiveIndex(i)}>
                                {c.name}
                            </span>)
                        }
                    })
                }

                {
                    !isOpen && 
                    <span class="project-header__link hover-transform project-header__link_border pointer project-header__link-all " onClick={() => setIsOpen(true)}>
                        + Всё
                    </span>
                }
				{
                    isOpen && 
                    <span class="project-header__link hover-transform project-header__link_border project-header__link-hide pointer" onClick={() => setIsOpen(false)}>
                        – Скрыть категории
                    </span>
                }
				
			</div>
		</div>
    )
}