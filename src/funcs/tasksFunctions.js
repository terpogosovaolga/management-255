// кннопка "Добавить задачу"
const funcs = {
  // переделывает номера старых задач после вставки или удаления новой
  changeNumberOfTasks: (array, old_number, new_number, parent) => {
    // индекс элемента, который нужно изменить
    const for_changing = array.findIndex(
      (t) => t.number == old_number && t.parent_id == parent
    );
    if (for_changing >= 0) {
      const elem = { ...array[for_changing] }; // копируем в новую ссылку
      elem.number = new_number; // увеличили на 1 старый номер или уменьшили

      changeNumberOfTasks(
        array,
        new_number,
        new_number + (new_number - old_number),
        parent
      ); // рекурсивно меняем остальные
      array[for_changing] = Object.assign(elem); // Только потом записываем новый number - иначе будет бесконечный цикл
    }
  },
};

export const { changeNumberOfTasks } = funcs;
