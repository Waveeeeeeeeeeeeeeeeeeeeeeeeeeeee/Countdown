type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HedingPropsType = {
    heading: HeadingType;
    text: string;
};

export const Heading = (props: HedingPropsType) => {
    return <props.heading>{props.text}</props.heading>;
};
