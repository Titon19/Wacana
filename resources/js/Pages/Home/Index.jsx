import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import React from "react";

const Index = () => {
    return (
        <AuthenticatedLayout>
            <div className="mt-12 py-4 min-h-screen">Index</div>
        </AuthenticatedLayout>
    );
};

export default Index;
