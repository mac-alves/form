import React, { useEffect, useRef, useState }from 'react';
import { ChangeEvent } from 'react';
import { useField } from "@unform/core";

import { Container, InputField, Check, Label, Msg } from './styles';

interface Option {
    value: string;
    label: string;
}

interface InputProps 
extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    height?: number;
    options: Array<Option>;
}

const Radio: React.FC<InputProps> = ({ name, height = 50, options, ...rest }) => {
    const { fieldName, registerField } = useField(name);
    const [ checked, setChecked ] = useState<string>('');
    const inputRef = useRef(null);

    function handleOptionChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        
        setChecked(event.target.value);
        (inputRef as any).current.value = event.target.value;
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [fieldName, registerField]);

    return (
        <Container height={height}>
            <input type="hidden" id={fieldName} ref={inputRef}/>
            { options.map((option, key) => (
                <Label key={key}>
                    <InputField
                        type="radio"
                        value={option.value}
                        checked={checked === option.value}
                        onChange={handleOptionChange}
                    />
                    <Check />
                    <Msg>{option.label}</Msg>
                </Label>
            )) }
        </Container>
    );
}

export default Radio;