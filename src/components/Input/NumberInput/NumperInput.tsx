import React from 'react';
import { Input } from '../Input';

const NumberType = 'number';

type NumberPropsType = {
    type: typeof NumberType;
    min: number;
    max: number;
    value: number;
    onChange: (newValue: number) => void;
};

export const NumberInput: React.FC<NumberPropsType> = props => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.target.value));
    };
    return <Input onChange={handleChange} value={props.value} type={props.type}></Input>;
};
