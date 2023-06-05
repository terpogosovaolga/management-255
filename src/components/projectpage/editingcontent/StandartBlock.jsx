export default function StandartBlock({days, title, color, percents}) {
    return (<div class={"project-block-days"+(percents ? " project-block-interest project-block-interest_"+percents+" project-block-interest_"+color : "")}>
    <div class={"project-block__title project-block__title_"+color}>
        {days}
    </div>
    <div class="project-block__text">
        {title}
    </div>
</div>)
}