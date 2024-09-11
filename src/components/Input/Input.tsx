import React, { InputHTMLAttributes } from 'react';

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
    id?: string;
    className?: string;
    type: string | undefined;
    min?: number;
    max?: number;
    step?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputPropsType> = props => {
    return <input {...props} />;
};
