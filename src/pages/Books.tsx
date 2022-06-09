import React from "react";
import { useQuery } from "react-query";
import { API } from "../global/FetchAPI";

export const Books = (): JSX.Element => {
    const { data } = useQuery(["books"], API.fetchAll);

    return (
        <React.Fragment>
            <h1>Books</h1>
            {data?.map((book) => (
                <main key={book._id}>
                    <h2>{book.title}</h2>
                    <p>Author: {book.first} {book.last}</p>
                    <p>Age: {book.age}</p>
                    <p>Info: {book.info}</p>
                </main>
            ))}
        </React.Fragment>
    );
};



