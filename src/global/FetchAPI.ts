import { IData, IBook } from "../models/Interfaces";

const URL = "https://book5-restapi.herokuapp.com/api";

class FetchClass {
    fetchAll = async (): Promise<IBook[]> => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const data: IBook[] = await res.json();
        return [...data];
    };

    getOne = async (id: string) => {
        const res: Response =
        await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data: IBook = await res.json();
        return data;
    };

    addBook = async (payload: IData): Promise<IBook> => {
        const res: Response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            })
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: IBook = await res.json();
        return data;
    };

    updateBook = 
    async ({_id, ...payload}: IBook): Promise<IBook> => {
        const res: Response = 
        await fetch(`${URL}/${_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: IBook = await res.json();
        return data;
    };

    deleteBook = async (_id: IBook): Promise<IBook> => {
        const res: Response = 
        await fetch(`${URL}/${_id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: IBook = await res.json();
        return data;
    };
};

export const API: FetchClass = new FetchClass();


