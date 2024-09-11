import { Button } from './Button';

type ResetPropsType = {
    onClick: () => void;
};

export const Reset: React.FC<ResetPropsType> = ({ onClick }) => {
    return <Button name='Reset' type='button' content='🔄 Reset' onClick={onClick}></Button>;
};
