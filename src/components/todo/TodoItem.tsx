import React from "react";
import { type Todo } from "../../hooks/useTodos";

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    return (
        <li className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
                <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    title="Mark task as completed"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <label htmlFor={`todo-${todo.id}`} className="sr-only">
                    Mark task as completed
                </label>
                <span
                    className={`flex-1 ${
                        todo.completed
                            ? "line-through text-gray-500"
                            : "text-gray-800"
                    }`}
                >
                    {todo.text}
                </span>
                <button
                    className="text-red-600 hover:text-red-800 font-medium text-sm px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    onClick={() => onDelete(todo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};
export default TodoItem;