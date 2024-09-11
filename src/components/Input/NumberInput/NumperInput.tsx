import React from 'react';
import { Input } from '../Input';

const NumberType = 'number';

type NumberPropsType = {
    type: typeof NumberType;
    min: number;
    max: number;
    value: number | string;
    onChange: (newValue: number) => void;
    placeholder?: string;
};

export const NumberInput: React.FC<NumberPropsType> = props => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        // Если ввод пустой, не конвертируем в число, а отправляем пустую строку
        if (newValue === '') {
            props.onChange(NaN); // Передаём NaN, чтобы не обновлять состояние
        } else {
            props.onChange(Number(newValue)); // Конвертируем в число и передаем как раньше
        }
    };

    return (
        <Input onChange={handleChange} value={props.value} type={props.type} placeholder={props.placeholder}></Input>
    );
};
