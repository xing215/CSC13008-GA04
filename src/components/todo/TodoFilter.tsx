import React from "react";
import { type FilterType } from "../../hooks/useTodos";

interface Props {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const TodoFilter: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
    const getFilterButtonClasses = (filterName: FilterType) => {
        const baseClasses =
            "px-4 py-2 text-sm font-medium focus:outline-none";
        if (currentFilter === filterName) {
            return `${baseClasses} text-blue-600 border-b-2 border-blue-600`;
        }
        return `${baseClasses} text-gray-600 hover:text-gray-900`;
    };

    return (
        <div className="mb-6">
            <div className="flex space-x-2 border-b border-gray-200">
                <button
                    className={getFilterButtonClasses("all")}
                    onClick={() => onFilterChange("all")}
                >
                    All
                </button>
                <button
                    className={getFilterButtonClasses("active")}
                    onClick={() => onFilterChange("active")}
                >
                    Active
                </button>
                <button
                    className={getFilterButtonClasses("completed")}
                    onClick={() => onFilterChange("completed")}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TodoFilter;