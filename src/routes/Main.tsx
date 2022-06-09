import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Books } from "../pages/Books";
import { Detail } from "../pages/Detail";
import { Create } from "../pages/Create";
import { NotFound } from "../components/NotFound";

export const Main = (): JSX.Element => (
    <BrowserRouter>
    <React.Fragment>
        <Navbar />
        <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<Detail />} />
            <Route path="/books/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </React.Fragment>
    </BrowserRouter>
);


