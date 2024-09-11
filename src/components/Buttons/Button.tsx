import React, { ButtonHTMLAttributes } from 'react';

type ButtonPropsType<T extends ButtonHTMLAttributes<HTMLButtonElement>> = {
    name: string;
    type: T['type'];
    value?: string;
    content: string;
    onClick?: T['onClick'];
};

export const Button = <T extends ButtonHTMLAttributes<HTMLButtonElement>>(props: ButtonPropsType<T>) => {
    return (
        <button name={props.name} type={props.type} onClick={props.onClick}>
            {props.content}
        </button>
    );
};
