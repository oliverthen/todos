import { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css"


const Todos: React.FC = () =>  {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map(item => {
				return (
					<TodoItem key={item.id} item={item}/>
				);
			})}
		</ul>
	);
}

export default Todos;