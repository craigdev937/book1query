import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => (
    <React.Fragment>
        <nav>
            <ul>
                <Link to="/books">Books</Link>
                <Link to="/books/create">Create</Link>
                <Link to="/books/edit/:id">Edit</Link>
            </ul>
        </nav>
    </React.Fragment>
);


