import React, { useEffect, useRef }from 'react';
import { useField } from "@unform/core";

import { Container, InputField, Error } from './styles';

interface InputProps 
extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    height?: number;
}

const Input: React.FC<InputProps> = ({ name, height = 50, ...rest }) => {

    const inputRef = useRef(null);

    const { fieldName, defaultValue = "", registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <InputField
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
                autoComplete="off"
                height={height}
            />
            { error && <Error>{error}</Error> }
        </Container>
    );
}

export default Input;