import { Button } from './Button';

type StartPropsType = {
    onClick: () => void;
    content: string;
};

export const Start: React.FC<StartPropsType> = ({ onClick, content }) => {
    return <Button name='Start button' type='button' content={content} onClick={onClick}></Button>;
};

export default Start;
