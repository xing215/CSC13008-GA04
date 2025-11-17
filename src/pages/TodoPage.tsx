import React from "react";
import { useTodos } from "../hooks/useTodos";
import AddTodoForm from "../components/todo/AddTodoForm";
import TodoFilter from "../components/todo/TodoFilter";
import TodoList from "../components/todo/TodoList";
import TodoStats from "../components/todo/TodoStats";
import Layout from "../components/Layout";

const TodoPage: React.FC = () => {
    const {
        newTodoText,
        setNewTodoText,
        filter,
        setFilter,
        filteredTodos,
        remainingCount,
        hasTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        handleClearCompleted,
    } = useTodos();

    // Render
    return (
      <Layout>
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Header */}
              <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                      My Todo List
                  </h1>
                  <p className="mt-2 text-gray-600">
                      Manage your tasks efficiently
                  </p>
              </div>

              {/* Add Todo Form */}
              <AddTodoForm
                  newTodoText={newTodoText}
                  setNewTodoText={setNewTodoText}
                  onAddTodo={handleAddTodo}
              />

              {/* Filter Tabs */}
              <TodoFilter 
                  currentFilter={filter} 
                  onFilterChange={setFilter} 
              />

              {/* Todo List Container */}
              <TodoList
                  todos={filteredTodos}
                  hasTodos={hasTodos}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
              />

              {/* Todo Stats */}
              <TodoStats
                  remainingCount={remainingCount}
                  onClearCompleted={handleClearCompleted}
              />
          </main>
      </Layout>
    );
};

export default TodoPage;