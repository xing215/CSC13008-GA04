import React from "react";

interface Props {
    remainingCount: number;
    onClearCompleted: () => void;
}

const TodoStats: React.FC<Props> = ({ remainingCount, onClearCompleted }) => {
    return (
        <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
            <span>
                {remainingCount} task{remainingCount !== 1 ? "s" : ""} remaining
            </span>
            <button
                className="text-red-600 hover:text-red-800 font-medium"
                onClick={onClearCompleted}
            >
                Clear completed
            </button>
        </div>
    );
};

export default TodoStats;