import { useState } from "react";
import CategoryTr from "./CategoryTr";

export default function CategoriesTable({cats}) {

    const [categories, setCategories] = useState(cats);

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    return (
        <div class="admin-panel-table__wrapper">
            <table class="admin-panel-table">
                {
                    categories.map(c => <CategoryTr category={c} key={c.id} isOpen={isOpenEdit} openFunc={setIsOpenEdit} setCategories={setCategories} categories={categories} />)
                }
				
            </table>
        </div>
    )
}