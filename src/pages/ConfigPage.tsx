import React, { useState } from "react";
import { configData } from "../hooks/configData";
import { Button } from "../components/ui/Button";
import {
    ConfigIcon,
    DeleteIcon,
    ExportIcon,
    ImportIcon,
} from "../components/ui/Icon";
import { ConfirmationModal } from "../components/ui/ConfirmationModal";
import Layout from "../components/Layout";

export const ConfigPage: React.FC = () => {
    // Gọi custom hook
    const { importData, exportData, clearAllData } = configData();

    // State để quản lý việc hiển thị modal xác nhận
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hàm xử lý khi người dùng xác nhận xóa
    const handleDeleteConfirm = () => {
        clearAllData();
    };

    return (
        <>
            <Layout>
                <main className="flex max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 items-center justify-center">
                    <header className="text-center">
                        <div className="title flex text-3xl font-bold justify-center items-center">
                            <ConfigIcon className="size-8 mt-1 mr-4" />
                            <h1 className="mb-2">Configuration</h1>
                        </div>
                        <p className="italic">
                            Manage your app data, including backup, import, and
                            delete.
                        </p>
                    </header>
                </main>

                {/* Configure options */}
                <div className="shadow-md max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-xl">
                    <ul className="list-none p-0 m-0">
                        {/* Import */}
                        <li className="item bg-slate-200 p-4 rounded-xl flex justify-between items-center mb-5">
                            <div className="info">
                                <h2 className="sub-title font-bold">
                                    Import Data
                                </h2>
                                <p className="desc text-sm italic">
                                    Restore your data from file (This will
                                    overwrite your current data).
                                </p>
                            </div>
                            <Button onClick={importData} className="cursor-pointer">
                                <ImportIcon />
                            </Button>
                        </li>

                        {/* Export */}
                        <li className="item bg-slate-200 p-4 rounded-xl flex justify-between items-center mb-5">
                            <div className="info">
                                <h2 className="sub-title font-bold">
                                    Export Data
                                </h2>
                                <p className="desc text-sm italic">
                                    Save data into file.
                                </p>
                            </div>
                            <Button onClick={exportData} className="cursor-pointer">
                                <ExportIcon />
                            </Button>
                        </li>

                        {/* Delete */}
                        <li className="item bg-red-200 p-4 rounded-xl flex justify-between items-center">
                            <div className="info">
                                <h2 className="sub-title font-bold">
                                    Delete Data
                                </h2>
                                <p className="desc text-sm italic">
                                    Delete permanently (You can't restore it).
                                </p>
                            </div>
                            {/* Del btn */}
                            <Button
                                variant="danger"
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer"
                            >
                                <DeleteIcon />
                            </Button>
                        </li>
                    </ul>
                </div>

                {/* Pop-ups confirmation */}
                <ConfirmationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleDeleteConfirm}
                    title="Confirmation"
                    message="Are you sure you want to delete current data? This action can't be undo."
                />
            </Layout>
        </>
    );
};
