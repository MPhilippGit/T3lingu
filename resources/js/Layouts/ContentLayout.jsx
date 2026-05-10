import { AppBreadcrumb } from "@/components/custom/app-breadcrumb";
import { usePage } from "@inertiajs/react";

export function ContentLayout({ children, breadcrumb }) {
    const flash = usePage();

    return (
        <main>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <AppBreadcrumb breadcrumb={breadcrumb} />
                </div>
            </header>
            {children}
        </main>
    );
}
