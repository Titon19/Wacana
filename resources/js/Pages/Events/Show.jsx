import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const Show = () => {
    return (
        <AuthenticatedLayout>
            <div className="mt-12 py-4 min-h-screen max-w-7xl mx-auto">
                <div className="max-w-7xl py-4 mx-auto flex flex-col gap-4 justify-between">
                    show
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
