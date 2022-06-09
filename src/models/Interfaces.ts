import React from "react"

export interface IData {
    title: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface IBook extends IData {
    _id: string
}

export interface IProps {
    isError: boolean,
    isLoading?: boolean,
    isSuccess?: boolean,
    error?: Error | null,
    successMessage?: string,
    showSuccessMessage?: boolean,
    children?: React.ReactNode
};



