import {getPrettyDateWithMonth} from '../../../funcs/datesFunctions';

export default function Dates({created_date, finish_date}) {
    return <div class="editing-panel-data">
    <div class="editing-panel-data__blok">
        <h5 class="editing-panel-data__title">
            Дата начала проекта
        </h5>
        <p class="editing-panel-data__text editing-panel-data__text_black">
            {getPrettyDateWithMonth(new Date(created_date))}
        </p>
    </div>
    <div class="editing-panel-data__blok">
        <h5 class="editing-panel-data__title">
            Дата сдачи проекта
        </h5>
        <p class="editing-panel-data__text editing-panel-data__text_black">
        {getPrettyDateWithMonth(new Date(finish_date))}
        </p>
    </div>
</div>
}