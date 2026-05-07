import React from "react";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function AppBreadcrumb({ breadcrumb }) {
    const list =
        breadcrumb instanceof Array &&
        breadcrumb.map((entry, idx) => {
            return (
                <React.Fragment key={idx}>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href={"/" + entry.toLowerCase()}>
                            {entry}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {idx !== breadcrumb.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
            );
        });

    return (
        <Breadcrumb>
            <BreadcrumbList>{list}</BreadcrumbList>
        </Breadcrumb>
    );
}
