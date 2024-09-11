import React from 'react';
import styled from 'styled-components';

export const ProgressContainer = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    height: 20px;
`;

export const ProgressBar = styled.div<{ value: number }>`
    background-color: #4caf50;
    height: 100%;
    width: ${({ value }) => value}%;
    transition: width 0.3s ease;
`;

export const ProgressText = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: white;
    font-weight: bold;
`;

type ProgressProps = {
    value: number;
};

export const Progress: React.FC<ProgressProps> = ({ value }) => {
    return (
        <ProgressContainer>
            <ProgressBar value={value} />
            <ProgressText>{value ? `${Math.round(value)}%` : '0'}</ProgressText>
        </ProgressContainer>
    );
};
