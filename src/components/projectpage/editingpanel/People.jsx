import {Link} from 'react-router-dom'

export default function People({title, people}) {
    return (<div class="editing-panel-text-blok">
    <div class="editing-panel-text-blok__title">
        {title}
    </div>
    <div class="editing-panel-text-blok__content">
        {
            people.map((m) => <Link class="editing-panel-text-blok__item" key={m.id} to={"/profile/"+m.id}>
            {m.fullname}
        </Link>)
        }
        
    </div>
</div>)
}