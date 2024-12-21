import Header from "@/Components/Elements/Header/Index";
export default function AuthenticatedLayout({ children }) {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <Header />

            <main className="bg-neutral-950 px-4">
                <div className="max-w-6xl min-h-screen mx-auto bg-neutral-950">
                    {children}
                </div>
            </main>
        </div>
    );
}
