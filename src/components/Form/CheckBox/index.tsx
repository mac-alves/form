import React, { useEffect, useRef, useState, useCallback }from 'react';
import { useField } from "@unform/core";

import { Container, Label, Check, Msg, InputField } from './styles';

interface InputProps 
extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    height?: number;
    label: string;
}

const CheckBox: React.FC<InputProps> = ({ name, height = 50, label, ...rest }) => {
    const { fieldName, registerField } = useField(name);
    const [ checked, setChecked ] = useState<boolean>(false);
    const inputRef = useRef(null);

    const handleCheck = useCallback(() => {
        setChecked(lastChecked => !lastChecked);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "checked",
        });
    }, [fieldName, registerField]);

    return (
        <Container height={height}>
            <Label >
                <InputField
                    ref={inputRef}
                    id={fieldName}
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                />
                <Check />
                <Msg>{label}</Msg>
            </Label>
        </Container>
    );
}

export default CheckBox;