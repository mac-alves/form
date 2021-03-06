import React, { 
    ChangeEvent, 
    useRef, 
    useEffect, 
    useCallback, 
    useState 
}  from 'react';
import { useField } from '@unform/core';
import { Container, Label, Msg, Error } from './styles';
import { BsPlusSquareFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
interface Props {
    name: string;
    height?: number;
    width?: number;
}
  
type InputProps = JSX.IntrinsicElements['input'] & Props;

const File: React.FC<InputProps> = ({ name, height = 50, width = 280, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, error } = useField(name);
    const [ preview, setPreview] = useState<File | null>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ id, setId ] = useState(1 + Math.random() * (99));

    const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        
        if (!file) {
            setPreview(null);
        } else {
            setPreview(file);
        }

    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            clearValue(ref: HTMLInputElement) {
                ref.value = '';
                setPreview(null);
            },
            setValue(_: HTMLInputElement, value: File) {
                setPreview(value);
            }     
        });     
    }, [fieldName, registerField]);

    return (
        <Container height={height} width={width}>
            <Label htmlFor={id.toString()} >
                { (!preview) ? (
                    <Msg width={width} height={height}>
                        <BsPlusSquareFill size={20} />
                        <p>Selecione o Arquivo</p>
                    </Msg>
                ) : (
                    <Msg width={width} height={height}>
                        <FaEdit size={20} />
                        <p>{preview.name}</p>
                    </Msg>
                ) }
                <input
                    type="file"
                    id={id.toString()}
                    ref={inputRef}
                    onChange={handlePreview}
                    {...rest} />
            </Label>
            <Error>{error}</Error>
        </Container>
    );
}

export default File;