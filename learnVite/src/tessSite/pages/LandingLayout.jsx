import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function LandingLayout() {

    return (
        <>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
        </>
    )
}