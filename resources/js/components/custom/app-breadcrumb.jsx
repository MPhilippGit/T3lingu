import React from "react";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function AppBreadcrumb({ ...data }) {
    const breadcrumbPages = new Array();

    Object.entries(data.pages).forEach((page) => {
        breadcrumbPages.push(page);
    });

    const breadcrumbs = breadcrumbPages.map((page, idx) => {
        const isLast = idx === breadcrumbPages.length - 1;

        return (
            <React.Fragment key={idx}>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={page[0]}>{page[1]}</BreadcrumbLink>
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
        );
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
        </Breadcrumb>
    );
}
