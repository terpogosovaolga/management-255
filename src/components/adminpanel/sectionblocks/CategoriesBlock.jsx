import CategoriesTable from "../categoriesblock/CategoriesTable";
import categories from '../../../testdata/categories.json';
export default function CategoriesBlock() {
    return (
        <div class="admin-panel-wrapper">
            <div class="admin-panel-wrapper__title">
				Категории проектов
			</div>
            <CategoriesTable cats={categories} />
        </div>
    )
}