import React from 'react';
import { Input } from '../Input';

const RangeType = 'range';

type RangePropsType = {
    type?: typeof RangeType;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange: (newValue: number) => void;
};

export const Range: React.FC<RangePropsType> = props => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.target.value));
    };
    return <Input type={props.type} min={props.min} max={props.max} step={props.step} onChange={handleChange} />;
};
