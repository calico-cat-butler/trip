import React, { ReactNode } from "react";
export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <main>{children}</main>
    );
}