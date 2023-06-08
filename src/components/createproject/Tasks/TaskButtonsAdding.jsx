import { useContext } from "react";
import { TasksContext } from "../RightForm";
import { changeNumberOfTasks } from "../../../funcs/tasksFunctions";

export default function TaskButtonAdding({nums, level}) {

    const {tasks, setTasks} = useContext(TasksContext);

    const style2 = {"paddingLeft": (level*2)+"rem"};

    // кннопка "Добавить задачу"
    const addTask = () => {
        let numbers = nums.split(".");
        let last = numbers[numbers.length - 2]; // 2
        numbers = numbers.slice(0, numbers.length-2);
        let our = parseInt(last)+1; // 3
        let newnum = numbers.join(".");
        if (numbers.length == 0) {
            // значит, верхний уровень
            newnum += our;
            numbers.push(our);
            add_(tasks[0].project_id, null, our);
        } else { 
            // значит, это подзадача. Нужно определить, чья
            if (newnum[newnum.length - 1] == "." || newnum.length == 0) newnum += our;
            else newnum += "."+our;
            numbers.push(our);
            const ids = getIdsOfTasksByNumbers(numbers);
            add_((ids[ids.length - 2]).project_id, (ids[ids.length - 2]).id, numbers[numbers.length-1]); // Добавление новой задачи с правильным номером (например, "1.1.2")
        }
    }
    
    // создание объекта задачи и правильная вставка в массив
    const add_ = (project, parent, number) => {
        let new_task = {
            id: Math.random(),
            text: "",
            parent_id: parent,
            status: 1,
            is_sogl: true,
            people: [],
            project_id: project,
            number: number 
        };
        let _tasks = tasks.slice(); // копирование по ссылке
        
        // Найти, была ли уже задача с таким номером и изменить номер и все последующие.  Например, мы вставляем новую задачу после 1.2 (1.3). У нас уже была задача 1.3, ее нужно переделать в 1.4 и так далее
        changeNumberOfTasks(_tasks, number, number+1, parent);

        _tasks.push(new_task);
        setTasks(_tasks);
        console.log(tasks);
    }

    // "кнопка Добавить подзадачу"
    const addSubTask = () => {
        let numbers = nums.split("."); // 1,1,2,""
        let last = numbers[numbers.length - 2]; // 2
        numbers = numbers.slice(0, numbers.length-1); // 1,1,2
        let our = 1; // 1
        let newnum = numbers.join(".");
        newnum += our;
        const project = tasks[0].project_id;
        const ids = getIdsOfTasksByNumbers(numbers);
        const id = ids[ids.length-1].id;
        console.log('parent_id', id);
        add_(project, id, 1);
    }

    const getIdsOfTasksByNumbers = (numbers) => {
        let ids = [];
        let last_id = null;
        for (const n of numbers) {
            ids.push(tasks.find(t => t.number == parseInt(n) && t.parent_id == last_id));
            last_id = ids[ids.length - 1] ? ids[ids.length - 1].id : -1;
            if (last_id < 0) {
                return ids;
            }
        }
        return ids;
    }

    return (
        <div class="editing-content-task-foter " style={style2}>
			<span href="#" class="editing-content-task-foter__button hover-transform pointer" onClick={addTask}>
				<span class="editing-content-task-foter__content"></span>
				<span class="editing-content-task-foter__text">
					Добавить задачу
				</span>
			</span>
			<span href="#" class="editing-content-task-foter__button hover-transform pointer" onClick={addSubTask}>
				<span class="editing-content-task-foter__content"></span>
				<span class="editing-content-task-foter__text">
					Добавить подзадачу
				</span>
			</span>
		</div>
    )
}