import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
    id?: string;
    className?: string;
    type: string | undefined;
    min?: number;
    max?: number;
    step?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const StyledInput = styled.input`
    width: 100%;
    max-width: 300px; /* Максимальная ширина для ввода */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    margin: 5px 0; /* Вертикальный отступ */
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }

    &[type='number'] {
        -moz-appearance: textfield; /* Убирает стрелки в Firefox */
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;

export const Input: React.FC<InputPropsType> = props => {
    return <StyledInput {...props} />;
};
