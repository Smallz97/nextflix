import { Outlet } from "react-router-dom";
import { Component } from "react";
export function Layout() {
    return (
        <>
            <Outlet />
        </>
    );
}

Component.displayName = "Layout"