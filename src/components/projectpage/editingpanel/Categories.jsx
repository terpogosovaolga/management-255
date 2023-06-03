export default function Categories({categories}) {
    return <div class="editing-panel-text-blok">
    <div class="editing-panel-text-blok__title">
        Категории проекта
    </div>
    <div class="editing-panel-text-blok__content">
        {
            categories.map(c => <span class="editing-panel-text-blok__item">
            {c}
        </span>)
        }
        
    </div>
</div>
}