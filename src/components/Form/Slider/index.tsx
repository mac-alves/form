import React, { useEffect, useRef }from 'react';
import { useField } from "@unform/core";

import { Container, InputField } from './styles';

interface InputProps 
extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    height?: number;
}

const Slider: React.FC<InputProps> = ({ name, height = 50, ...rest }) => {
    const inputRef = useRef(null);

    const { fieldName, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <Container height={height}>
            <InputField
                ref={inputRef}
                id={fieldName}
                type="range"
                {...rest}
            />
        </Container>
    );
}

export default Slider;