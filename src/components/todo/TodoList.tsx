import React from "react";
import { type Todo } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";
import TodoEmptyState from "./TodoEmptyState";

interface Props {
    todos: Todo[];
    hasTodos: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, hasTodos, onToggle, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            {!hasTodos && <TodoEmptyState />}
        </div>
    );
};
export default TodoList;