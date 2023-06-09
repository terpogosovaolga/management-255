import { useState } from 'react';
import pic from '../../../assets/img/adminPanel/12.svg';
import DeleteCategoryConfirm from '../modals/DeleteCategoryConfirm';
import AddEditCategoryModal from '../modals/AddEditCategoryModal';

export default function CategoryTr({category, isOpen, openFunc, setCategories, categories}) {

    // когда true, открывается подтверждение удаления (при нажатии на крестик)
    const [isConfirm, setIsConfirm] = useState(false);


    const changeHidden = () => {
        let cat = Object.assign(category);
        cat.hidden = !category.hidden;
        let cats = categories.slice();
        let index = cats.findIndex(c => c.id == cat.id);
        cats[index] = cat;
        setCategories(cats);
    }
    const deleteCategory = () => {
        let cats = categories.slice();
        let index = cats.findIndex(c => c.id == category.id);
        cats.splice(index, 1);
        setCategories(cats);
    }

    const editCategory = (str) => {
        console.log(str);
        let cats = categories.slice();
        let index = cats.findIndex(c => c.id == category.id);
        console.log(category.id, index);
        cats[index].name = str;
        console.log(cats[index]);
        setCategories(cats);
    }

    return (
        <tr class="admin-panel-table__body">
			<td class="admin-panel-table__blok admin-panel-table__content_15">
				<span class="admin-panel-table__text">
					13 проектов
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_30">
				<span class="admin-panel-table__text">
					<span class="admin-panel-table__icon-black">
						{category.name}
					</span>
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_20">
				<span class="admin-panel-table__text">
					Скрыть категорию
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_5">
				<span class="admin-panel-table__text">
					<span class="admin-panel-table__icon-blue pointer" onClick={changeHidden}>
						{category.hidden ? "Да" : "Нет"}
					</span>
				</span>
			</td>
			<td class="admin-panel-table__blok admin-panel-table__content_20">
				<span class="admin-panel-table__text">
					<span class="admin-panel-table__icon-border pointer" onClick={() => openFunc(true)}>
						Изменить
					</span>
				</span>
				<img src={pic} alt="" className='pointer' onClick={() => setIsConfirm(true)}/>
                <DeleteCategoryConfirm open={isConfirm} closeFunc={() => setIsConfirm(false)} name={category.name} confirmFunc={deleteCategory}/>
                <AddEditCategoryModal open={isOpen} closeFunc={() => openFunc(false)} category={category} confirmFunc={(value) => editCategory(value)}/>
			</td>
		</tr>                                                                
    )
}