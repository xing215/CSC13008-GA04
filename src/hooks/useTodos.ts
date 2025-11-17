import { useState, useEffect, useMemo } from "react";

// Định nghĩa kiểu
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export type FilterType = "all" | "active" | "completed";

export const useTodos = () => {
    // --- STATE ---
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [filter, setFilter] = useState<FilterType>("all");

    // --- EFFECTS ---
    // Tự động lưu vào localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // --- DERIVED STATE ---
    const filteredTodos = useMemo(() => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            case "all":
            default:
                return todos;
        }
    }, [todos, filter]);

    const remainingCount = useMemo(() => {
        return todos.filter((todo) => !todo.completed).length;
    }, [todos]);

    const hasTodos = todos.length > 0;

    // --- EVENT HANDLERS ---
    const handleAddTodo = () => {
        const trimmedText = newTodoText.trim();
        if (trimmedText) {
            const newTodo: Todo = {
                id: Date.now(),
                text: trimmedText,
                completed: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodoText("");
        }
    };

    const handleToggleTodo = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleClearCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    return {
        // State & Setters
        todos,
        filter,
        setFilter,
        newTodoText,
        setNewTodoText,
        // Derived State
        filteredTodos,
        remainingCount,
        hasTodos,
        // Handlers
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        handleClearCompleted,
    };
};