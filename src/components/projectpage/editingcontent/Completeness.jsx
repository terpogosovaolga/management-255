export default function Completeness({comp, all, color }) {
    return (
        <div class="project-block-tasks">
            <div class={"project-block__title project-block__title_"+color}>
                {comp}<span>/{all}</span>
            </div>
            <div class="project-block__text">
            Задач выполнено
            </div>
        </div>
    )
}