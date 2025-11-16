import { toast } from "react-hot-toast";

export function configData() {
    const refreshUI = () => {
        window.location.reload();
    };

    /**
     * Import
     */
    const importData = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.click();

        input.onchange = (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const todos = JSON.parse(e.target?.result as string);
                    if (!Array.isArray(todos)) {
                        toast.error(
                            "File error: file does not contain a data array."
                        );
                        return;
                    }
                    localStorage.setItem("todos", JSON.stringify(todos));
                    toast.success("Import data successfully!");
                    refreshUI(); // Cập nhật UI
                } catch (error) {
                    toast.error("Error: Cannot read JSON file.");
                    console.error(error);
                }
            };
            reader.readAsText(file);
        };
    };

    /**
     * Export
     */
    const exportData = () => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        if (todos.length === 0) {
            toast("No data to export.", { icon: "ℹ️" });
            return;
        }

        const jsonData = JSON.stringify(todos, null, 4);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        a.href = url;
        a.download = `todos-backup-${timestamp}.json`;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast.success("Export sucessfully!");
    };

    /**
     * Delete
     */
    const clearAllData = () => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        if (todos.length === 0) {
            toast("No data to delete.", { icon: "ℹ️" });
            return;
        }

        localStorage.removeItem("todos");
        toast.success("Delete all data successfully!");
        refreshUI(); // Cập nhật UI
    };

    return { importData, exportData, clearAllData };
}
