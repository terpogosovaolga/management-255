import { Link, NavLink } from "react-router-dom";
import pic1 from '../../assets/img/adminPanel/1.svg';
import pic2 from '../../assets/img/adminPanel/2.svg';
import picf2 from '../../assets/img/adminPanel/2-f.svg';
import pic3 from '../../assets/img/adminPanel/3.svg';
import picf3 from '../../assets/img/adminPanel/3-f.svg';
import pic4 from '../../assets/img/adminPanel/4.svg';
import picf4 from '../../assets/img/adminPanel/4-f.svg';
import pic5 from '../../assets/img/adminPanel/5.svg';
import picf5 from '../../assets/img/adminPanel/5-f.svg';
import pic6 from '../../assets/img/adminPanel/6.svg';
import picf6 from '../../assets/img/adminPanel/6-f.svg';
import pic7 from '../../assets/img/adminPanel/7.svg';
import picf7 from '../../assets/img/adminPanel/7-f.svg';

export default function AdminMenu({sec, setSec}) {

    const links = [
        {
            id: 1,
            name: "Сотрудники",
            urlpart: "users",
            img: pic2,
            img_f: picf2
        },
        {
            id: 2,
            name: "Клиенты",
            urlpart: "customers",
            img: pic3,
            img_f: picf3
        },
        {
            id: 3,
            name: "Проекты",
            urlpart: "projects",
            img: pic4,
            img_f: picf4
        },
        {
            id: 4,
            name: "Рубрики проектов",
            urlpart: "categories",
            img: pic5,
            img_f: picf5
        },
        {
            id: 5,
            name: "Должности и спец.",
            urlpart: "professions",
            img: pic6,
            img_f: picf6
        },
        {
            id: 6,
            name: "Ниша клиентов",
            urlpart: "industries",
            img: pic7,
            img_f: picf7
        },
        {
            id: 7,
            name: "Шаблоны задач",
            urlpart: "task-patterns",
            img: pic7,
            img_f: picf7
        },
    ]

    return (
        <div className="admin-panel-links">
			<Link to="/profile/1" className="admin-panel-link">
				<img src={pic1} alt="" className="admin-panel-link__img" />
				<span className="admin-panel-link__text">
					Вернуться в профиль
				</span>
			</Link>

            {
                links.map((l, i) => 
                    <span key={l.id} onClick={() => setSec(i)}  className={"admin-panel-link pointer" + (i == sec ? " active" : "")}>
                        {
                            i == sec && <img src={l.img_f} alt="" className="admin-panel-link__img" />
                        }
                        {
                            i != sec && 
                            <img src={l.img} alt="" className="admin-panel-link__img" />
                        }
                        <span className="admin-panel-link__text">
                            {l.name}
                        </span>
                    </span>
                )
            }


		</div>
    )
}