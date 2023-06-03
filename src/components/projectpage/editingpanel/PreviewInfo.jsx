
import copy from '../../../assets/img/document-copy.svg';

export default function PreviewInfo({client_link, password_link, is_open}) {
    return <div class="editing-panel-link editing-panel-link_flex ">
    <div class="editing-panel-link__blok">
        <div class="editing-panel-link__title">
            Ссылка на просмотр проекта 
        </div>
        <div class="copia-content">
            <a href={client_link} class="copia-content__content editing-panel-link__content hover-transform">{client_link}</a>
            <span class="copia-content__button"><img src={copy} alt="" /></span>
        </div>
    </div>
    <div class="editing-panel-link__blok">
        <div class="editing-panel-link__title">
            Задать пароль
        </div>
        {!is_open && <div class="copia-content">
            <span class="copia-content__content editing-panel-link__content editing-panel-link__content_black"> {password_link} </span>
            <span class="copia-content__button"><img src={copy} alt="" /></span>
        </div>}
    </div>
</div>
}