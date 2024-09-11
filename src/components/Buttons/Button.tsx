import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonPropsType<T extends ButtonHTMLAttributes<HTMLButtonElement>> = {
    name: string;
    type: T['type'];
    value?: string;
    content: string;
    onClick?: T['onClick'];
};

const StyledButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #003d7a;
    }

    &:disabled {
        background-color: #b0b0b0;
        cursor: not-allowed;
    }
`;

export const Button = <T extends ButtonHTMLAttributes<HTMLButtonElement>>(props: ButtonPropsType<T>) => {
    return (
        <StyledButton name={props.name} type={props.type} onClick={props.onClick}>
            {props.content}
        </StyledButton>
    );
};
