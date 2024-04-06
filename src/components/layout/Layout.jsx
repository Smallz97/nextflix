import { useSelector } from 'react-redux'
import { Outlet, Navigate } from "react-router-dom";
import { Component } from "react";

export function Layout() {
    const { authenticated } = useSelector((state) => state.authentication);
    return (
        <>
            {authenticated ? <Outlet /> : <Navigate to="/" />}
        </>
    );
}

Component.displayName = "Layout"