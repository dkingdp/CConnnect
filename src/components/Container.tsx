import React from "react";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
// import f from "public/android-icon-144x144.png"

const Container = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen text-primary-200 overflow-x-hidden relative">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Container;
