import React, { 
  ChangeEvent, 
  useRef, 
  useEffect, 
  useCallback, 
  useState 
}  from 'react';
import { Container, Img, Label } from './styles';
import { useField } from '@unform/core';
import { BsPlusSquareFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { GoOctoface } from 'react-icons/go';

import Modal from '../../Modal';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const FileImg: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField } = useField(name);
    const [ preview, setPreview] = useState<string | null>(null);
    const [ finalImg, setFinalImg] = useState<string | null>(null);
    const [ classAnimate, setClassAnimate ] = useState('');
    const [ modalOpen, setModalOpen ] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ id, setId ] = useState(1 + Math.random() * (99));

    function animateImg() {
        if (classAnimate === '') {
            setClassAnimate('did-fade-in');
        } else {
            setClassAnimate('');
        }
    }

    const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setModalOpen(true);

        const file = e.target.files?.[0];
        if (!file) {
            setPreview(null);
        }
        
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
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
            setValue(_: HTMLInputElement, value: string) {
                setPreview(value);
            }     
        })       
    }, [fieldName, finalImg, registerField]);
    
    return (
        <>
            <Container onAnimationEnd={animateImg} >
                { (finalImg) ? <Img src={finalImg} alt="Preview"/> : 
                            <GoOctoface size={100} id="defaultImg" /> }
                <Label htmlFor={id.toString()} className={classAnimate} >
                    { (!finalImg) ? <BsPlusSquareFill size={40} /> : <FaEdit size={40} /> }                
                </Label>
                {/* { (error && (preview === UserImg)) && <Error>{error}</Error> } */}
                <input
                    type="file"
                    id={id.toString()}
                    ref={inputRef}
                    onChange={handlePreview}
                    {...rest} />
            </Container>
            {preview && <Modal 
                stateOpen={modalOpen} 
                setStateOpen={setModalOpen} 
                previewImg={preview}
                setFinalImg={setFinalImg}
                finalImg={finalImg}
                inputRef={inputRef} />}
        </>
    );
}

export default FileImg;