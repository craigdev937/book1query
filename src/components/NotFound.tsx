import React from "react";
import { Link } from "react-router-dom";

export  const NotFound = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Not Found!</h1>
            <button>
                <Link to="/">Go Back</Link>
            </button>
        </React.Fragment>
    );
};




