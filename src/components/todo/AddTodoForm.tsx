import React from "react";

interface Props {
    newTodoText: string;
    setNewTodoText: (text: string) => void;
    onAddTodo: () => void;
}

const AddTodoForm: React.FC<Props> = ({ newTodoText, setNewTodoText, onAddTodo }) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onAddTodo();
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Add New Task
            </h2>
            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors cursor-pointer"
                    onClick={onAddTodo}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};
export default AddTodoForm;